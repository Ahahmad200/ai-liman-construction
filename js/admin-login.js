import { createClient } from
    "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://ospcafhxywbwhjgvnoxq.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_7wjYcysMxhqjMOQu_gptKw_VqEXJY_U";

const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    loginMessage.textContent = "Logging in...";

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        loginMessage.textContent = error.message;
        loginMessage.style.color = "red";
        return;
    }

    const { data: roleData, error: roleError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", data.user.id)
        .single();

    if (roleError || !roleData || roleData.role !== "admin") {
        await supabase.auth.signOut();
        loginMessage.textContent = "Access denied. Administrators only.";
        loginMessage.style.color = "red";
        return;
    }

    loginMessage.textContent = "Login successful!";
    loginMessage.style.color = "green";

    window.location.href = "admin-properties.html";
});
