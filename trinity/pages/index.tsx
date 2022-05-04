import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Layout from '../components/layout';

const Home: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const ref5 = useRef<HTMLDivElement>(null);
  const ref6 = useRef<HTMLDivElement>(null);
  const ref7 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollHandler = (ref: React.RefObject<HTMLDivElement>) => () => {
      if (ref && ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const top = rect.top;
        if (ref === ref7) {
          if (top < (window.innerHeight * 2) / 3) {
            ref.current.classList.add('ani2');
          }
        } else {
          if (top < window.innerHeight / 2) {
            ref.current.classList.add('ani2');
          }
        }
      }
    };

    const handler = scrollHandler(ref);
    const handler2 = scrollHandler(ref2);
    const handler3 = scrollHandler(ref3);
    const handler4 = scrollHandler(ref4);
    const handler5 = scrollHandler(ref5);
    const handler6 = scrollHandler(ref6);
    const handler7 = scrollHandler(ref7);

    window.addEventListener('scroll', handler);
    window.addEventListener('scroll', handler2);
    window.addEventListener('scroll', handler3);
    window.addEventListener('scroll', handler4);
    window.addEventListener('scroll', handler5);
    window.addEventListener('scroll', handler6);
    window.addEventListener('scroll', handler7);

    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('scroll', handler2);
      window.removeEventListener('scroll', handler3);
      window.removeEventListener('scroll', handler4);
      window.removeEventListener('scroll', handler5);
      window.removeEventListener('scroll', handler6);
      window.removeEventListener('scroll', handler7);
    };
  }, []);

  const canvasRef = useRef(null);
  useEffect(() => {
    const img = new Image();
    img.src = 'images/カラフル１.jpg';
    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, ctx.width, ctx.height);
      const pattern = ctx.createPattern(img, 'no-repeat');
      ctx.fillStyle = pattern;
      ctx.beginPath();
      ctx.moveTo(25, 50);
      ctx.lineTo(25, 550);
      ctx.lineTo(575, 300);
      ctx.fill();
      ctx.fillStyle = 'blue';
      ctx.beginPath();
      ctx.moveTo(100, 150);
      ctx.lineTo(100, 450);
      ctx.lineTo(430, 300);
      ctx.fill();
      ctx.fillStyle = pattern;
      ctx.beginPath();
      ctx.moveTo(154, 220);
      ctx.lineTo(154, 380);
      ctx.lineTo(330, 300);
      ctx.fill();
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>トップページ</title>
      </Head>
      <div style={{ position: 'relative', height: '700px' }}>
        <canvas
          width={600}
          height={600}
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        ></canvas>
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
        <div ref={ref}>家庭教師　個人契約の新たな形態</div>
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
