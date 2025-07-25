import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react";
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'
import colors from 'tailwindcss/colors'

const data = [
    {
        product: 'Peperoni', amount: 40
    },
    {
        product: 'Mussarela', amount: 30
    },
    {
        product: 'Marguerita', amount: 50
    },
    {
        product: '4 Queijos', amount: 16
    },
    {
        product: 'Frago frito', amount: 26
    },
]

const COLORS = [
    colors.sky[500],
    colors.amber[500],
    colors.violet[500],
    colors.emerald[500],
    colors.rose[500],
]

export function PopularProductsChart() {
    return (
        <Card className="col-span-3">
            <CardHeader className="pb-5 pt-2">
                    <CardTitle className="text-base font-medium">Produtos populares</CardTitle>
                    <BarChart className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width={"100%"} height={240}>
                    <PieChart style={{fontSize: 12}}>

                        <Pie data={data} dataKey={"amount"} nameKey={"product"} cx={"50%"} cy={"50%"} outerRadius={86} innerRadius={64} strokeWidth={8} labelLine={false} label={({cx, cy, midAngle, innerRadius, outerRadius, value, index}) => {
                            const RADIAN = Math.PI / 180;
                            const radius = 12 + innerRadius + (outerRadius - innerRadius);
                            const x = cx + radius * Math.cos(-midAngle * RADIAN);
                            const y = cy + radius * Math.sin(-midAngle * RADIAN);

                            return(
                                <text
                                    x={x}
                                    y={y}
                                    className="fill-muted-foreground text-xs"
                                    textAnchor={x > cx ? 'start' : 'end'}
                                    dominantBaseline={"central"}
                                    >
                                        {data[index].product.length > 12 ? data[index].product.substring(0, 12).concat('...') : data[index].product} ({value})
                                    </text>
                            )
                        }}>
                            {data.map((_, i) => {
                                return (
                                    <Cell key={`cel-${i}`} fill={COLORS[i]} className="stroke-background hover:opacity-80"/>
                                );
                            })}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}