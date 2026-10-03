import { createClient } from
    "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://ospcafhxywbwhjgvnoxq.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_7wjYcysMxhqjMOQu_gptKw_VqEXJY_U";

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

// Load all properties from Supabase
async function loadProperties() {
    const propertyList = document.getElementById("propertyList");

    propertyList.innerHTML = "Loading properties...";

    try {
        const { data, error } = await supabase
            .from("properties")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Supabase error:", error);
            propertyList.textContent =
                "Error: " + error.message;
            return;
        }

        if (!data || data.length === 0) {
            propertyList.textContent =
                "No properties have been added yet.";
            return;
        }

        propertyList.innerHTML = "";

        data.forEach(function (property) {
            const item = document.createElement("div");

            const title = document.createElement("h3");
            title.textContent = property.title;

            const type = document.createElement("p");
            type.textContent = "Type: " + property.property_type;

            const status = document.createElement("p");
            status.textContent = "Status: " + property.status;

            const location = document.createElement("p");
            location.textContent =
                "Location: " + (property.location || "Not specified");

            const price = document.createElement("p");
            price.textContent =
                "Price: " + (property.price ?? "Not specified");

            item.append(title, type, status, location, price);
            propertyList.appendChild(item);
        });

    } catch (error) {
        console.error("Loading failed:", error);
        propertyList.textContent =
            "Loading failed: " + error.message;
    }
}
console.log("PROPERTY ADMIN JS IS RUNNING");
