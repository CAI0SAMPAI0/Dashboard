'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, } from "lucide-react";
import { ChartContainer, ChartConfig } from "../ui/chart";
import { Bar, CartesianGrid, XAxis, BarChart } from "recharts";

export function ChartOverview(){

    const chartData = [
        { month: "January", desktop: 100, mobile: 80 },
        { month: "February", desktop: 150, mobile: 120 },
        { month: "March", desktop: 200, mobile: 160 },
        { month: "April", desktop: 250, mobile: 200 },
        { month: "May", desktop: 300, mobile: 240 },
        { month: "June", desktop: 350, mobile: 280 },
    ]

    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "blue",
        },
        mobile: {
            label: "Mobile",
            color: "green",
        },
    } satisfies ChartConfig

    return (
        <Card className="w-full md:w-1/2 md:max-w-150">
            <CardHeader>
                <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800">Visão Geral</CardTitle>
                <DollarSign className="ml-auto w-4 h-4" />
                </div>
            </CardHeader>
            <CardContent>
                
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <BarChart data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)} />
                        <Bar dataKey="desktop" fill={chartConfig.desktop.color} name={chartConfig.desktop.label} radius={[4, 4, 0, 0]} />
                        <Bar dataKey="mobile" fill={chartConfig.mobile.color} name={chartConfig.mobile.label} radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ChartContainer>

            </CardContent>
        </Card>
    );
}