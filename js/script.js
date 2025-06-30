// supabase connections
const supabaseUrl = "https://zfxmljfqznzjshfqpnxm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmeG1samZxem56anNoZnFwbnhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyNDEwNDgsImV4cCI6MjAzNDgxNzA0OH0.cHeXAq71OY9gXeWdF3X3KpuTIbAbNEA4WSrsBzzNO9g";

const connectSupabase = (supabase) => {
  return supabase.createClient(supabaseUrl, supabaseKey, {
    db: {
      schema: "public",
    },
  });
};

// format daate
const formatDate = () => {
  const date = new Date(); // Note: months are 0-indexed
  return date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};
