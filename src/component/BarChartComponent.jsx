import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const salesData = [
  { name: "Q221", productA: 8, productB: 11, productC: 15 },
  { name: "Q321", productA: 12, productB: 9, productC: 16 },
  { name: "Q421", productA: 10, productB: 14, productC: 18 },
  { name: "Q122", productA: 6, productB: 12, productC: 17 },
  { name: "Q222", productA: 14, productB: 10, productC: 19 },
  { name: "Q322", productA: 8, productB: 13, productC: 20 },
  { name: "Q422", productA: 10, productB: 11, productC: 17 },
  { name: "Q123", productA: 9, productB: 14, productC: 19 },
  { name: "Q223", productA: 12, productB: 13, productC: 20 },
];

const BarChartComponent = () => {
  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#DEF1FC",
            border: `2px solid #DEF1FC`,
            borderRadius: "8px",
            padding: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <p style={{ fontWeight: "bold", color: "#0c0c0c" }}>{label}</p>
          {payload.map((item, index) => (
            <div key={index} style={{ marginBottom: "4px" }}>
              <span style={{ color: item.fill }}>{item.name}: </span>
              <span style={{ fontWeight: "bold" }}>{item.value}</span>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className='w-full h-[200px]'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          width={500}
          height={300}
          data={salesData}
          margin={{
            top: 5,
            right: 30,
            left: 2,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip content={CustomTooltip} />
          {/* <Legend /> */}
          <Bar dataKey='productA' fill='#00CFFF' />
          <Bar dataKey='productB' fill='#4A90E2' />
          <Bar dataKey='productC' fill='#002A5E' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
