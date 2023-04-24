import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lcvebwngevsjqhyaliqg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjdmVid25nZXZzanFoeWFsaXFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwNTU5MTEsImV4cCI6MTk5NzYzMTkxMX0.QAjXEklAuTEerhW8OqAmmoO865Jz_WsMzPJvc8iR56Q";
export const supabase = createClient(supabaseUrl, supabaseKey);
