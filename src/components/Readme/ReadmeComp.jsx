import * as React from "react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { motion } from "framer-motion";
import { BsExclamation } from "react-icons/bs";
import profilePic from "./profilePic.jpeg";
import Footer from "./Footer";

const ReadmeComponent = () => {
  const [open, setOpen] = useState(false);
  const [hasSeenReadme, setHasSeenReadme] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  useEffect(() => {
    setTimeout(() => {
      const hasSeen = localStorage.getItem("hasSeenReadme");
      if (!hasSeen) {
        setOpen(true);
      }
    }, 3000);
  }, []);

  const handleOpen = () => {
    setHasSeenReadme(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setHasSeenReadme(true);
    localStorage.setItem("hasSeenReadme", "true");
  };

  return (
    <>
      {!hasSeenReadme && (
        <Dialog
          onClose={handleClose}
          TransitionComponent={Transition}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
          open={open}
        >
          <DialogTitle disableTypography>
            <div className="flex flex-col-reverse gap-2 md:flex-row justify-between items-center">
              <Typography variant="h6">
                <span className="text-blue-500 hover:underline">
                  <a href="https://github.com/MMansy19/E-Commerce-Website">
                    App Readme
                  </a>
                </span>
              </Typography>

              <IconButton>
                <a
                  href="https://github.com/MMansy19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar
                    alt="Mahmoud Mansy"
                    src={profilePic}
                    sx={{
                      width: "70px",
                      height: "70px",
                      border: "2px solid #3B82F6",
                    }}
                  />
                </a>
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent dividers>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant={isMobile ? "body2" : "body1"}
                textAlign="center"
                mx={isMobile ? 0 : 2}
                paragraph
                className="text-gray-800"
                style={{ fontSize: isMobile ? "1rem" : "1.25rem" }}
              >
                This is an e-commerce app built with React, Vite, Tailwind CSS,
                Firebase, React Router, Context API, and React Icons.
              </Typography>
              <Typography variant="body1" paragraph className="text-gray-800">
                Features:
              </Typography>
              <ul className="list-disc ml-3 md:ml-6 mb-2 md:mb-4 text-sm md:text-base text-gray-800">
                <li>Multi-language support (English, German, and Arabic).</li>
                <li>
                  Advanced sorting and filtering algorithms for product display.
                </li>
                <li>Dynamic Flash Sale Slider.</li>
                <li>Efficient product search functionality.</li>
                <li>
                  Secure authentication and user management with Firebase.
                </li>
                <li>
                  Seamless shopping experience with Cart and Wishlist features.
                </li>
                <li>Responsive design for all devices.</li>
              </ul>
              <Footer />
            </motion.div>
          </DialogContent>
        </Dialog>
      )}

      <IconButton
        className="bg-blue-500 hover:bg-blue-700 text-white rounded-full p-2 transition duration-300"
        onClick={handleOpen}
        size="small"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <BsExclamation className="hover:bg-red-500 rounded-full w-6 h-auto md:w-8 md:h-8" />
      </IconButton>
    </>
  );
};

export default ReadmeComponent;
