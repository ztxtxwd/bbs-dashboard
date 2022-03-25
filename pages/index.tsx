import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import * as echarts from 'echarts';

const Home: NextPage = () => {
  var myChart;
  if (typeof window !== 'undefined') {
    console.log(typeof window);
    // your code with access to window or document object here
    // 基于准备好的dom，初始化echarts实例
    myChart = echarts.init(document.getElementById('myChartId')!);
    // 绘制图表
  }
  if (myChart) {
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center dark:bg-black index-bg">
      <Head>
        <title>BBS Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div
          id="myChartId"
          className="h-96 w-full bg-white/50 shadow-2xl rounded-3xl dark:bg-black/70 backdrop-blur filter"
        ></div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2 dark:text-white"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
