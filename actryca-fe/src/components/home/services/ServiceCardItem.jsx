import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { CircleCheck } from "lucide-react";
import React from "react";

const ServiceCardItem = ({
  title,
  desc,
  check1,
  check2,
  check3,
  check4,
  btnText,
}) => {
  return (
    <Card
      sx={{ width: 350, height: 450 }}
      className="rounded-2xl border p-4 hover:shadow-md transition-all"
    >
      <CardContent className="h-full flex flex-col justify-between">
        <Typography
          variant="h4"
          className="font-dm-serif-text text-[32px] font-normal"
          sx={{ color: "primary.darkest" }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          className="text-sm"
          sx={{ color: "primary.dark" }}
        >
          {desc}
        </Typography>
        <Box className="center-col !items-start gap-2">
          <div className="center !justify-start gap-2">
            <CircleCheck className="text-primary-600" size={18} />
            <Typography
              variant="body2"
              className="font-bold"
              sx={{ color: "primary.dark" }}
            >
              {check1}
            </Typography>
          </div>
          <div className="center !justify-start gap-2">
            <CircleCheck className="text-primary-600" size={18} />
            <Typography
              variant="body2"
              className="font-bold"
              sx={{ color: "primary.dark" }}
            >
              {check2}
            </Typography>
          </div>
          <div className="center !justify-start gap-2">
            <CircleCheck className="text-primary-600" size={18} />
            <Typography
              variant="body2"
              className="font-bold"
              sx={{ color: "primary.dark" }}
            >
              {check3}
            </Typography>
          </div>
          <div className="center !justify-start gap-2">
            <CircleCheck className="text-primary-600" size={18} />
            <Typography
              variant="body2"
              className="font-bold"
              sx={{ color: "primary.dark" }}
            >
              {check4}
            </Typography>
          </div>
        </Box>

        <CardActions>
          <Button variant="contained">{btnText}</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ServiceCardItem;
