import { Typography } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import Layout from '../components/layout';

const Home: NextPage = () => {
  const inputRef = useRef<HTMLDivElement>(null);
  const inputRef2 = useRef<HTMLDivElement>(null);
  const inputRef3 = useRef<HTMLDivElement>(null);
  const inputRef4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = (ref: RefObject<HTMLDivElement>) => () => {
      if (!ref.current) return;
      if (ref.current.offsetTop < window.scrollY + window.innerHeight - 150) {
        ref.current.style.opacity = '1';
        ref.current.style.transition = '2s';
      }
    };
    window.addEventListener('scroll', handle(inputRef));
    window.addEventListener('scroll', handle(inputRef2));
    window.addEventListener('scroll', handle(inputRef3));
    window.addEventListener('scroll', handle(inputRef4));
  }, []);

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
        <div
          style={{
            width: '50%',
            height: '100%',
            position: 'absolute',
            background: 'yellow',
            zIndex: '1',
            animation: 'animation1 4s ease-in 0s 1',
          }}
        ></div>
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
            pointerEvents: 'none',
          }}
        >
          Medical Trinity
        </Typography>
      </div>
      <section id={'title'}>
        <div className={'center'}>
          <div>
            <p>家庭教師　個人契約の新たな形態</p>
          </div>
        </div>
      </section>
      <section id={'content'}>
        <div className={'left'} ref={inputRef}>
          <p>チームでサポート</p>
        </div>
        <div className={'right'} ref={inputRef2}>
          <p>コンサルタントが最適な教師を紹介</p>
        </div>
        <div className={'left'} ref={inputRef3}>
          <p>選び抜かれた参考書</p>
        </div>
        <div className={'right'} ref={inputRef4}>
          <p>無理のないカリキュラムの作成</p>
        </div>
      </section>
      <section id={'price'}>
        <div className={'center'}>
          <p>料金</p>
        </div>
      </section>
      <section id={'process'}>
        <div className={'center'}>
          <p>ご契約までの流れ</p>
        </div>
      </section>
      <style jsx>{`
        p {
          width: 400px;
          height: 300px;
          border: 3px solid black;
          border-radius: 40px;
          background-color: #eeeeee;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 50px;
          margin-bottom: 50px;
        }
        section#title p {
          width: 700px;
          height: 200px;
        }
        .center {
          display: flex;
          justify-content: center;
        }
        .left {
          display: flex;
          justify-content: flex-start;
          margin-left: 100px;
        }
        .right {
          display: flex;
          justify-content: flex-end;
          margin-right: 100px;
        }
        section#title {
          background-color: #000099;
        }
        section#content {
          background-color: wheat;
        }
        section#content div {
          opacity: 0;
        }
        section#price {
          background-color: #000099;
        }
        section#process {
          background-color: wheat;
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
          animation: animation2 1s ease-in 4.5s forwards;
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
          animation: animation2 1s ease-in 4.5s forwards;
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
          animation: animation2 1s ease-in 4.5s forwards;
        }
        @keyframes animation1 {
          0% {
            width: 0;
          }
          50% {
            width: 100%;
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
      `}</style>
    </Layout>
  );
};

export default Home;
