import { createClient } from
    "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://ospcafhxywbwhjgvnoxq.supabase.co/rest/v1/";
const SUPABASE_ANON_KEY = "sb_publishable_7wjYcysMxhqjMOQu_gptKw_VqEXJY_U ";

const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
