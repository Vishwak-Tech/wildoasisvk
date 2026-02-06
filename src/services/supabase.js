
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://jcyvsrvdaxqznkbbcjoj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjeXZzcnZkYXhxem5rYmJjam9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5NzQyMTAsImV4cCI6MjA4MzU1MDIxMH0.K56HCq-TZVG4LrOzYmbJWwqD9X5X1ntGiOyCijlvDQ4";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;