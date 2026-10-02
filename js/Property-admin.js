import { createClient } from
    "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://ospcafhxywbwhjgvnoxq.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_7wjYcysMxhqjMOQu_gptKw_VqEXJY_U ";

const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
// Check administrator login
async function checkAdmin() {
    const { data: { user }, error } =
        await supabase.auth.getUser();

    if (error || !user) {
        alert("Please log in first.");
        window.location.href = "admin-login.html";
        return false;
    }

    const { data, error: roleError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .single();

    if (roleError || !data || data.role !== "admin") {
        alert("Access denied. Administrators only.");
        await supabase.auth.signOut();
        window.location.href = "admin-login.html";
        return false;
    }

    return true;
}

// Administrator logout
document.getElementById("logoutButton")
    .addEventListener("click", async function () {
        await supabase.auth.signOut();
        window.location.href = "admin-login.html";
    });

// Check access when the page loads
checkAdmin().then(function (isAdmin) {
    if (isAdmin) {
        console.log("Administrator verified successfully.");
    }
});
// Load all properties from Supabase
async function loadProperties() {
    const propertyList = document.getElementById("propertyList");

    propertyList.innerHTML = "Loading properties...";

    const { data, error } = await supabase
        .from("properties")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        propertyList.innerHTML = "Error loading properties: " + error.message;
        return;
    }

    if (data.length === 0) {
        propertyList.innerHTML = "No properties have been added yet.";
        return;
    }

    propertyList.innerHTML = "";

    data.forEach(function (property) {
        const item = document.createElement("div");

        item.innerHTML = `
            <h3>${property.title}</h3>
            <p>Type: ${property.property_type}</p>
            <p>Status: ${property.status}</p>
            <p>Location: ${property.location || "Not specified"}</p>
            <p>Price: ${property.price || "Not specified"}</p>
            <p>${property.description || ""}</p>
            <hr>
        `;

        propertyList.appendChild(item);
    });
}

// Load properties after the administrator is verified
checkAdmin().then(function (isAdmin) {
    if (isAdmin) {
        loadProperties();
    }
});
