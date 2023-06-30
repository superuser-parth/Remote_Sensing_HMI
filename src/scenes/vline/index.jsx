import { Box } from "@mui/material";
import Header from "../../components/Header";
import VLineChart from "../../components/VLineChart";

const VLine = () => {
  return (
    <Box m="20px">
      <Header title="Voltage" subtitle="Graph" />
      <Box height="75vh">
        <VLineChart />
      </Box>
    </Box>
  );
};

export default VLine;