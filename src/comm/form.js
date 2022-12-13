import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SendIcon from "@mui/icons-material/Send";
import InputLabel from "@mui/material/InputLabel";
import { useForm } from "react-hook-form";
import CheckIcon from "@mui/icons-material/Check";
import FormControl from "@mui/material/FormControl";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
export default function FormR() {
  const [Level, setLevel] = React.useState("");

  const handleChange = (event) => {
    setLevel(event.target.value);
  };
  const ref = collection(firestore, "membars-Traning");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (date, e) => {
    document.getElementById("mainForm").style.visibility = "hidden";
    document.getElementById("chicked").style.display = "block";
    console.log(date);
    try {
      addDoc(ref, date);
    } catch (date) {
      console.log(date);
    }
  };

  return (
    <div>
      <div id="chicked" style={{ display: "none" }}>
        <CheckIcon
          size="large"
          sx={{
            width: 900,
            color: "success.main",
          }}
        />
      </div>
      <form
        className="mainForm"
        id="mainForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              type="text"
              id="input-with-sx"
              label="Name in arabic"
              variant="standard"
              required
              {...register("name", {
                required: true,
                pattern: /^[\u0621-\u064A ]+$/,
              })}
            />
          </Box>
          <p>{errors.name?.type === "required" && "name is required"}</p>
          <p>{errors.name?.type === "pattern" && "name is not valid"}</p>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <MailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Email"
              variant="standard"
              required
              {...register("email", {
                require: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
              })}
            />
          </Box>
          <p>{errors.email?.type === "required" && "email is required"}</p>
          <p>{errors.email?.type === "pattern" && "email is not valid"}</p>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PhoneIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="WhatsApp No."
              variant="standard"
              required
              {...register("phone", { require: true, pattern: /[0-9]/ })}
            />
          </Box>{" "}
          <p>
            {errors.phone?.type === "required" && "Phone Numper is required"}
          </p>
          <p>
            {errors.phone?.type == "pattern" && "phone Numper is not valid"}
          </p>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <ContactEmergencyIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              id="input-with-sx"
              label="National ID"
              variant="standard"
              required
              {...register("National", { require: true, pattern: /[0-9]/ })}
            />
          </Box>{" "}
          <p>
            {errors.National?.type === "required" && "National ID is required"}
          </p>
          <p>
            {errors.National?.type == "pattern" && "National ID is not valid"}
          </p>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <LocationCityIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Department"
              variant="standard"
              required
              {...register("Department", {
                required: true,
              })}
            />
          </Box>
          <p>
            {errors.Debartmint?.type === "required" && "Debartmint is required"}
          </p>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <WorkspacePremiumIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Academic Level
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Level}
                label="Academic Level"
                onChange={handleChange}
                name="level"
                {...register("level", {
                  required: true,
                })}
              >
                <MenuItem value={"First"}>First</MenuItem>
                <MenuItem value={"Second"}>Second</MenuItem>
                <MenuItem value={"Third"}>Third</MenuItem>
                <MenuItem value={"Fourth"}>Fourth</MenuItem>
              </Select>
            </FormControl>
            <p>{errors.level?.type === "required" && "level is required"}</p>
          </Box>
        </Box>
        <button id="submit-but" type="submit" onClick={() => {}}>
          submit <SendIcon sx={{ color: "primary", mr: 0, my: -1 }}></SendIcon>
        </button>
      </form>
    </div>
  );
}
