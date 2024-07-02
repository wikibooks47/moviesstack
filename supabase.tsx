import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://tugiknrskarsomebhxsr.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1Z2lrbnJza2Fyc29tZWJoeHNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3NDU2NTUsImV4cCI6MjAzNDMyMTY1NX0.JCzomu1sJSrKtTAnfzpyAD93wcn0uuR6B9vO83_ljqw"
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase