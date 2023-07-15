import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const MessageSuccess = ({ purchaseID }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        Gracias por su compra, su numero de transacción es: {purchaseID}
      </Alert>
    </Stack>
  );
};

export default MessageSuccess;
