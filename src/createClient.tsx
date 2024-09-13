import { createClient } from "@supabase/supabase-js"



export const supabase = createClient(
    "https://xkbwlhxwklfdgoybmgcm.supabase.co/", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrYndsaHh3a2xmZGdveWJtZ2NtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxNjI2OTcsImV4cCI6MjA0MTczODY5N30.EOPNbq-4LiMRuoxdyEDh--afQYReFE2_bEahpasOTW4"
);