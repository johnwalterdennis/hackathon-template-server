const jwt = require("jsonwebtoken");
const supabase = require("../services/supabaseClient.js");

// exports.someFunction = async (req, res, next) => {
//   res.json({ event: data[0] });
// };

exports.getSomething = async (req, res) => {
  const { data, error } = await supabase.from("test").select("*");
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.json({ events: data });
};

//example functions

// exports.loginUser = async (req, res) => {
//     const { email, password } = req.body;
//     const { data, error } = await supabase
//       .from('users')
//       .select('*')
//       .eq('email', email)
//       .eq('password', password)
//       .single();

//     if (error || !data) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }
//     // Generate JWT token
//     const token = jwt.sign(
//       { id: data.id, email: data.email, is_admin: data.has_access },
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' }
//     );
//     res.json({ token, user: data });
//   };

// exports.createSomething = async (req, res) => {
//     const { thing_name, thing_description, thing_date } = req.body;
//     const { data, error } = await supabase
//       .from('things')
//       .insert([{ thing_name, thing_description, thing_date  }]);
//     if (error) {
//       return res.status(500).json({ error: error.message });
//     }
//     res.status(201).json({ event: data[0] });
//   };

//exports.getSomething = async (req, res) => {
//     const { data, error } = await supabase
//     .from('things')
//     .select('*');
//   if (error) {
//     return res.status(500).json({ error: error.message });
//   }
//   res.json({ events: data });
// };

//get something with auth
//
