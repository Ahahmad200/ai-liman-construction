import { createClient } from
    "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://ospcafhxywbwhjgvnoxq.supabase.co";

const SUPABASE_ANON_KEY =
    "sb_publishable_7wjYcysMxhqjMOQu_gptKw_VqEXJY_U";

const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

const propertyList =
    document.getElementById("propertyList");

const logoutButton =
    document.getElementById("logoutButton");


// ================================
// ADMIN CHECK
// ================================

async function checkAdmin() {

    propertyList.textContent =
        "Checking administrator access...";

    const {
        data: { user },
        error
    } = await supabase.auth.getUser();

    if (error) {
        propertyList.textContent =
            "Login check error: " + error.message;
        return false;
    }

    if (!user) {
        propertyList.textContent =
            "No administrator is logged in.";

        window.location.href =
            "admin-login.html";

        return false;
    }

    propertyList.textContent =
        "Administrator verified. Loading properties...";

    const {
        data,
        error: roleError
    } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .single();

    if (roleError) {

        propertyList.textContent =
            "Role error: " + roleError.message;

        return false;
    }

    if (!data || data.role !== "admin") {

        propertyList.textContent =
            "Access denied. Administrator role not found.";

        await supabase.auth.signOut();

        return false;
    }

    return true;
}


// ================================
// LOAD PROPERTIES
// ================================

async function loadProperties() {

    propertyList.textContent =
        "Loading properties from Supabase...";

    try {

        const {
            data,
            error
        } = await supabase
            .from("properties")
            .select("*")
            .order("created_at", {
                ascending: false
            });

        if (error) {

            propertyList.textContent =
                "PROPERTY ERROR: " + error.message;

            console.error(error);

            return;
        }

        if (!data || data.length === 0) {

            propertyList.textContent =
                "No properties have been added yet.";

            return;
        }

        propertyList.innerHTML = "";

        data.forEach(function(property) {

            const item =
                document.createElement("div");

            item.className =
                "admin-property";

            item.innerHTML = `
                <h3>${property.title}</h3>

                <p>
                    <strong>Type:</strong>
                    ${property.property_type}
                </p>

                <p>
                    <strong>Status:</strong>
                    ${property.status}
                </p>

                <p>
                    <strong>Location:</strong>
                    ${property.location || "Not specified"}
                </p>

                <p>
                    <strong>Price:</strong>
                    ${property.price || "Not specified"}
                </p>

                <p>
                    ${property.description || ""}
                </p>
            `;

            propertyList.appendChild(item);

        });

    } catch (error) {

        propertyList.textContent =
            "UNEXPECTED ERROR: " + error.message;

        console.error(error);
    }
}


// ================================
// LOGOUT
// ================================

logoutButton.addEventListener(
    "click",
    async function() {

        await supabase.auth.signOut();

        window.location.href =
            "admin-login.html";
    }
);


// ================================
// START ADMIN DASHBOARD
// ================================

async function startDashboard() {

    const isAdmin =
        await checkAdmin();

    if (isAdmin) {
        await loadProperties();
    }
}

startDashboard();
