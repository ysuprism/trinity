import { Typography } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import Layout from '../components/layout';

const Home: NextPage = () => {
  const [triggered1, setTriggered1] = useState(false);
  const [triggered2, setTriggered2] = useState(false);
  const [triggered3, setTriggered3] = useState(false);
  const [triggered4, setTriggered4] = useState(false);
  const [triggered5, setTriggered5] = useState(false);
  const [triggered6, setTriggered6] = useState(false);
  const [triggered7, setTriggered7] = useState(false);
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const ref4 = useRef<HTMLDivElement | null>(null);
  const ref5 = useRef<HTMLDivElement | null>(null);
  const ref6 = useRef<HTMLDivElement | null>(null);
  const ref7 = useRef<HTMLDivElement | null>(null);

  const scrollHandler1 = () => {
    if (ref1 && ref1.current) {
      const rect = ref1.current.getBoundingClientRect();
      const top = rect.top;
      if (top < window.innerHeight / 2) {
        ref1.current.classList.add('ani2');
        setTriggered1(true);
      }
    }
  };

  const scrollHandler2 = () => {
    if (ref2 && ref2.current) {
      const rect = ref2.current.getBoundingClientRect();
      const top = rect.top;
      if (top < window.innerHeight / 2) {
        ref2.current.classList.add('ani2');
        setTriggered2(true);
      }
    }
  };

  const scrollHandler3 = () => {
    if (ref3 && ref3.current) {
      const rect = ref3.current.getBoundingClientRect();
      const top = rect.top;
      if (top < window.innerHeight / 2) {
        ref3.current.classList.add('ani2');
        setTriggered3(true);
      }
    }
  };

  const scrollHandler4 = () => {
    if (ref4 && ref4.current) {
      const rect = ref4.current.getBoundingClientRect();
      const top = rect.top;
      if (top < window.innerHeight / 2) {
        ref4.current.classList.add('ani2');
        setTriggered4(true);
      }
    }
  };

  const scrollHandler5 = () => {
    if (ref5 && ref5.current) {
      const rect = ref5.current.getBoundingClientRect();
      const top = rect.top;
      if (top < window.innerHeight / 2) {
        ref5.current.classList.add('ani2');
        setTriggered5(true);
      }
    }
  };

  const scrollHandler6 = () => {
    if (ref6 && ref6.current) {
      const rect = ref6.current.getBoundingClientRect();
      const top = rect.top;
      if (top < window.innerHeight / 2) {
        ref6.current.classList.add('ani2');
        setTriggered6(true);
      }
    }
  };

  const scrollHandler7 = () => {
    if (ref7 && ref7.current) {
      const rect = ref7.current.getBoundingClientRect();
      const top = rect.top;
      if (top < (window.innerHeight * 2) / 3) {
        ref7.current.classList.add('ani2');
        setTriggered7(true);
      }
    }
  };

  useEffect(() => {
    if (!triggered1) {
      window.addEventListener('scroll', scrollHandler1);
      return () => window.removeEventListener('scroll', scrollHandler1);
    }
    if (!triggered2) {
      window.addEventListener('scroll', scrollHandler2);
      return () => window.removeEventListener('scroll', scrollHandler2);
    }
    if (!triggered3) {
      window.addEventListener('scroll', scrollHandler3);
      return () => window.removeEventListener('scroll', scrollHandler3);
    }
    if (!triggered4) {
      window.addEventListener('scroll', scrollHandler4);
      return () => window.removeEventListener('scroll', scrollHandler4);
    }
    if (!triggered5) {
      window.addEventListener('scroll', scrollHandler5);
      return () => window.removeEventListener('scroll', scrollHandler5);
    }
    if (!triggered6) {
      window.addEventListener('scroll', scrollHandler6);
      return () => window.removeEventListener('scroll', scrollHandler6);
    }
    if (!triggered7) {
      window.addEventListener('scroll', scrollHandler7);
      return () => window.removeEventListener('scroll', scrollHandler7);
    }
  }, [triggered1, triggered2, triggered3, triggered4, triggered5, triggered6, triggered7]);

  return (
    <Layout>
      <Head>
        <title>トップページ</title>
      </Head>
      <div style={{ position: 'relative', height: '600px' }}>
        <div className={'triangle1-wrap'}>
          <div className={'triangle1'}></div>
        </div>
        <div className={'triangle2-wrap'}>
          <div className={'triangle2'}></div>
        </div>
        <div className={'triangle3-wrap'}>
          <div className={'triangle3'}></div>
        </div>
        <div className={'bg'}></div>
        <Typography
          fontWeight={'bold'}
          fontSize={200}
          textAlign={'center'}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '5',
          }}
        >
          Medical Trinity
        </Typography>
      </div>
      <section id={'title'}>
        <div ref={ref1}>家庭教師　個人契約の新たな形態</div>
      </section>
      <section id={'content'}>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <div className={'item1'} ref={ref2}>
              チームでサポート
            </div>
          </li>
          <li>
            <div className={'item2'} ref={ref3}>
              コンサルタントが最適な教師を紹介
            </div>
          </li>
          <li>
            <div className={'item3'} ref={ref4}>
              選び抜かれた参考書
            </div>
          </li>
          <li>
            <div className={'item4'} ref={ref5}>
              無理のないカリキュラムの作成
            </div>
          </li>
        </ul>
      </section>
      <section id={'price'}>
        <div ref={ref6}>料金</div>
      </section>
      <section id={'process'}>
        <div ref={ref7}>ご契約までの流れ</div>
      </section>
      <style jsx>{`
        ul {
          margin: 0;
        }
        #title {
          width: 100%;
          height: 400px;
          background: #000099;
          position: relative;
        }
        #title div {
          width: 80%;
          height: 80%;
          background: white;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          border: 30px solid black;
          border-radius: 40px;
          opacity: 0;
        }
        .bg {
          width: 50%;
          height: 100%;
          position: absolute;
          background: yellow;
          zindex: 1;
          animation: animation1 2s ease-in 0s forwards;
        }
        #content {
          width: 100%;
          height: 1600px;
          background: wheat;
          position: relative;
        }
        #content div {
          width: 40%;
          height: 20%;
          background: white;
          position: absolute;
          text-align: center;
          border: 30px solid black;
          border-radius: 40px;
          opacity: 0;
        }
        .item1 {
          top: 2.5%;
          left: 5%;
        }
        .item2 {
          top: 27.5%;
          left: 55%;
        }
        .item3 {
          top: 52.5%;
          left: 5%;
        }
        .item4 {
          top: 77.5%;
          left: 55%;
        }
        #price {
          width: 100%;
          height: 400px;
          background: #000099;
          position: relative;
        }
        #price div {
          width: 80%;
          height: 80%;
          background: white;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          border: 30px solid black;
          border-radius: 40px;
          opacity: 0;
        }
        #process {
          width: 100%;
          height: 400px;
          background: wheat;
          position: relative;
        }
        #process div {
          width: 80%;
          height: 80%;
          background: white;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          border: 30px solid black;
          border-radius: 40px;
          opacity: 0;
        }
        .triangle1-wrap {
          width: 200px;
          height: 200px;
          position: absolute;
          top: 40%;
          left: 40%;
          transform: rotate(20deg) skew(-10deg);
          overflow: hidden;
          z-index: 4;
        }
        .triangle1 {
          width: 100%;
          height: 100%;
          position: absolute;
          top: -50%;
          left: -50%;
          transform: rotate(45deg);
          background: url(images/カラフル１.jpg);
          background-size: cover;
          opacity: 0;
          animation: animation2 2s ease-in 2.5s forwards;
        }
        .triangle2-wrap {
          width: 400px;
          height: 400px;
          position: absolute;
          top: 35%;
          left: 35%;
          transform: rotate(20deg) skew(-10deg);
          overflow: hidden;
          z-index: 3;
        }
        .triangle2 {
          width: 100%;
          height: 100%;
          position: absolute;
          top: -50%;
          left: -50%;
          transform: rotate(45deg);
          background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
          opacity: 0;
          animation: animation2 2s ease-in 2.6s forwards;
        }
        .triangle3-wrap {
          width: 600px;
          height: 600px;
          position: absolute;
          top: 30%;
          left: 30%;
          transform: rotate(20deg) skew(-10deg);
          overflow: hidden;
          z-index: 2;
        }
        .triangle3 {
          width: 100%;
          height: 100%;
          position: absolute;
          top: -50%;
          left: -50%;
          transform: rotate(45deg);
          background: url(images/カラフル１.jpg);
          background-size: cover;
          opacity: 0;
          animation: animation2 2s ease-in 2.7s forwards;
        }
        @keyframes animation1 {
          0% {
            width: 0;
          }
          100% {
            width: 50%;
          }
        }
        @keyframes animation2 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .ani2 {
          animation: animation2 1s ease-in 0s forwards;
        }
        @keyframes animation3 {
          100% {
            transform: translate(12.5%, -50%);
          }
        }
        .ani3 {
          animation: animation3 1s ease-in 0s forwards;
        }
        @keyframes animation-left {
          100% {
            transform: translateX(12.5%);
          }
        }
        .ani-left {
          animation: animation-left 0.5s ease-in 0s forwards;
        }
        @keyframes animation-right {
          100% {
            transform: translateX(-112.5%);
          }
        }
        .ani-right {
          animation: animation-right 0.5s ease-in 0s forwards;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
