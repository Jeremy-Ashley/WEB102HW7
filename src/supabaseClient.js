import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zxwetxwrwqubqasuqhjc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4d2V0eHdyd3F1YnFhc3VxaGpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2NzcxNDMsImV4cCI6MjEwMDI1MzE0M30.pJ5JbuLr8c8tn-HEUHKFgxK7FOHotP609DtoeoBDf5o";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);

