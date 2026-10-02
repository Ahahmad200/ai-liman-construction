import { createClient } from
    "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://ospcafhxywbwhjgvnoxq.supabase.co/rest/v1/";
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
