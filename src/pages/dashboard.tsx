import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { Header, Sidebar } from "../components"
import { theme } from "../styles/theme";

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});


const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-04-10T00:00:00.000Z',
      '2021-04-11T00:00:00.000Z',
      '2021-04-12T00:00:00.000Z',
      '2021-04-13T00:00:00.000Z',
      '2021-04-14T00:00:00.000Z',
      '2021-04-15T00:00:00.000Z',
      '2021-04-16T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    typ: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 51, 18, 109] }
];

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        px="6"
      >
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box
            padding="8"
            background="gray.800"
            borderRadius={8}
            pb="8"
          >
            <Text fontSize="large" marginBottom="4">Inscritos da Semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box
            padding="8"
            background="gray.800"
            borderRadius={8}
            pb="8"
          >
            <Text fontSize="large" marginBottom="4">Taxa de Abertura</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

        </SimpleGrid>
      </Flex>
    </Flex>
  )
}