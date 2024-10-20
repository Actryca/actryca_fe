"use client";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Drama, PenLine, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import AlertBox from "@/components/ui/AlertBox";
import { useMutation } from "@tanstack/react-query";
import { selectStatus } from "../../../services/auth";
import useAuthStore from "@/store/auth-store";

const OptionButton = ({
  option,
  icon: Icon,
  title,
  desc,
  selectedOption,
  handleOptionClick,
}) => (
  <Button
    onClick={() => handleOptionClick(option)}
    sx={{
      display: "flex",
      width: "300px",
      height: "360px",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "32px",
      padding: "36px 24px",
      border: "1px solid",
      borderColor: "primary.light",
      backgroundColor: selectedOption === option ? "primary.light" : "grey.100",
      color: "primary.darkest",
    }}
    className="rounded-2xl border-2 p-4 hover:bg-primary-100 hover:shadow-md hover:scale-[1.01] transition-all"
  >
    <Icon
      className="text-primary-600"
      strokeWidth={1.5}
      width={70}
      height={70}
    />
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "12px",
        alignSelf: "stretch",
      }}
    >
      <Typography
        variant="h4"
        className="title"
        sx={{
          fontSize: "22px",
          fontWeight: "bold",
          lineHeight: "24px",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ lineHeight: "24px" }}
        className="text-left"
      >
        {desc}
      </Typography>
    </Box>
  </Button>
);

const Page = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [alertProps, setAlertProps] = useState({
    open: false,
    message: "",
    severity: "info",
  });
  const { setStatus: setStoreStatus } = useAuthStore(); 
  const router = useRouter();

  const handleAlertClose = () => {
    setAlertProps((prev) => ({ ...prev, open: false }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: (selectedOption) => selectStatus(selectedOption),  
    onSuccess: (data) => {
      if (!data.error) {
        setStoreStatus(selectedOption); 
        setAlertProps({
          severity: "success",
          message: "Seçiminiz başarılı bir şekilde kaydedildi!",
          open: true,
        });
        router.push(`/user-register/${selectedOption}`);
      } else {
        setAlertProps({
          severity: "error",
          message: "Seçim işlemi başarısız oldu.",
          open: true,
        });
      }
    },
    onError: (error) => {
      console.error(error.response?.data); 
      setAlertProps({
        severity: "error",
        message: "Bir hata oluştu. Lütfen tekrar deneyin.",
        open: true,
      });
    },
  });

  const handleOptionClick = (option) => {
    setSelectedOption(option); 
  };

  const handleContinue = () => {
    if (selectedOption) {
      mutate(selectedOption);  
    }
  };

  return (
    <Box className="bg-white top-0 left-0 w-screen h-screen z-50 fixed padding center">
      <AlertBox alertProps={alertProps} onClose={handleAlertClose} />
      <Box className="center-col">
        <Box>
          <Typography
            variant="h4"
            className="font-dm-serif-text text-center font-bold"
          >
            Siz Hangi Kullanıcı Grubundasınız?
          </Typography>
          <Typography
            variant="h5"
            className="font-dm-serif-text text-center p-4"
          >
            Yaratıcı topluluğumuza katılarak kendinize uygun bir rol bulun.
          </Typography>
        </Box>
        <Box className="flex gap-12 p-16">
          <OptionButton
            option="actor"
            icon={Drama}
            title="Oyuncu"
            desc="Yeteneklerinizi sergileyin ve projelerde yer alın."
            selectedOption={selectedOption}
            handleOptionClick={handleOptionClick}
          />
          <OptionButton
            option="author"
            icon={PenLine}
            title="Yazar"
            desc="Yeteneklerinizi sergileyin ve projelerde yer alın."
            selectedOption={selectedOption}
            handleOptionClick={handleOptionClick}
          />
          <OptionButton
            option="others"
            icon={Star}
            title="Diğer"
            desc="Yeteneklerinizi sergileyin ve projelerde yer alın."
            selectedOption={selectedOption}
            handleOptionClick={handleOptionClick}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: selectedOption ? "primary.main" : "grey",
            width: "400px",
          }}
          disabled={!selectedOption || isLoading} 
          onClick={handleContinue}
        >
          {isLoading ? "Yükleniyor..." : "Devam et"}
        </Button>
      </Box>
    </Box>
  );
};

export default Page;
