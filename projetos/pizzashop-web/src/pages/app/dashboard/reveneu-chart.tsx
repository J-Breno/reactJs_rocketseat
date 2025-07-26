import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip } from 'recharts'
import colors from 'tailwindcss/colors'
const data = [
    {
        date: '10/12', reveneu: 1200
    },
    {
        date: '11/12', reveneu: 800
    },
    {
        date: '12/12', reveneu: 900
    },
    {
        date: '13/12', reveneu: 400
    },
    {
        date: '14/12', reveneu: 2300
    },
    {
        date: '15/12', reveneu: 800
    },
    {
        date: '16/12', reveneu: 640
    },
]

export function RevenueChart() {
    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-5 pt-2">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">Receita no período</CardTitle>
                    <CardDescription>Receita diária no período</CardDescription>
                </div> 
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width={"100%"} height={240}>
                    <LineChart style={{fontSize: 12}} data={data}>
                        <XAxis dataKey={"date"} tickLine={false} axisLine={false} dy={16} />
                        <YAxis stroke="#888" axisLine={false} tickLine={false} tickFormatter={(value: number) => value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} width={80}/>
                        <Line type={"linear"} strokeWidth={2} dataKey={"reveneu"} stroke={colors.violet['500']} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}