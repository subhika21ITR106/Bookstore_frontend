// import React from "react";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import MailIcon from "@mui/icons-material/Mail";
// import CallIcon from "@mui/icons-material/Call";
// import {
//   Box,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
// } from "@mui/material";

// const Contact = () => {
//   return (
//     <>
//       <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
//         <Typography variant="h4">Contact Our Team</Typography>
//         <p>
          
//         </p>
//       </Box>
//       <Box
//         sx={{
//           m: 3,
//           width: "600px",
//           ml: 10,
//           "@media (max-width:600px)": {
//             width: "300px",
//           },
//         }}
//       >
//         <TableContainer component={Paper}>
//           <Table aria-label="contact table">
//             <TableHead>
//               <TableRow>
//                 <TableCell
//                   sx={{ bgcolor: "black", color: "white" }}
//                   align="center"
//                 >
//                   Contact Details
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               <TableRow>
//                 <TableCell>
//                   <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
//                   (tollfree)
//                 </TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>
//                   <MailIcon sx={{ color: "skyblue", pt: 1 }} /> bookstore614@gmail.com
//                 </TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>
//                   <CallIcon sx={{ color: "green", pt: 1 }} /> +91 9876543210
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </>
//   );
// };

// export default Contact;
import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled // Import the styled method
} from "@mui/material";

const ContactBox = styled(Box)({
  backgroundImage: 'url("https://tse2.mm.bing.net/th?id=OIP.Wqjdu89w06exwaMIxpmpEgHaC2&pid=Api&P=0&h=220")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
});

const Contact = () => {
  return (
    <ContactBox>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Our Team</Typography>
        <p></p>
      </Box>
      <Box sx={{ m: 3, width: "600px", ml: 10, "@media (max-width:600px)": { width: "300px" } }}>
        <TableContainer component={Table}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "black", color: "white" }} align="center">
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> bookstore614@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> +91 9876543210
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ContactBox>
  );
};

export default Contact;
