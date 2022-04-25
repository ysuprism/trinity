import { Typography } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import Layout from '../components/layout';

const Home: NextPage = () => {
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
            animation: 'animation1 2s ease-in 0s forwards',
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
          }}
        >
          Medical Trinity
        </Typography>
      </div>
      <section id={'title'}>
        <div>家庭教師　個人契約の新たな形態</div>
      </section>
      <section id={'content'}>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <div className={'item1'}>チームでサポート</div>
          </li>
          <li>
            <div className={'item2'}>コンサルタントが最適な教師を紹介</div>
          </li>
          <li>
            <div className={'item3'}>選び抜かれた参考書</div>
          </li>
          <li>
            <div className={'item4'}>無理のないカリキュラムの作成</div>
          </li>
        </ul>
      </section>
      <section id={'price'}>
        <div>料金</div>
      </section>
      <section id={'process'}>
        <div>ご契約までの流れ</div>
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
          left: 0%;
          transform: translate(-100%, -50%);
          text-align: center;
          border: 40px solid black;
          border-radius: 40px;
          animation: animation3 2s ease-in 5s forwards;
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
        }
        .item1 {
          top: 2.5%;
          left: 0%;
          transform: translateX(-100%);
          animation: animation-left 2s ease-in 6.5s forwards;
        }
        .item2 {
          top: 27.5%;
          left: 100%;
          animation: animation-right 2s ease-in 8.5s forwards;
        }
        .item3 {
          top: 52.5%;
          left: 0%;
          transform: translateX(-100%);
          animation: animation-left 2s ease-in 10.5s forwards;
        }
        .item4 {
          top: 77.5%;
          left: 100%;
          animation: animation-right 2s ease-in 12.5s forwards;
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
          left: 0%;
          transform: translate(-100%, -50%);
          text-align: center;
          border: 40px solid black;
          border-radius: 40px;
          animation: animation3 2s ease-in 13s forwards;
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
          left: 0%;
          transform: translate(-100%, -50%);
          text-align: center;
          border: 40px solid black;
          border-radius: 40px;
          animation: animation3 2s ease-in 15s forwards;
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
        @keyframes animation3 {
          100% {
            transform: translate(12.5%, -50%);
          }
        }
        @keyframes animation-left {
          100% {
            transform: translateX(12.5%);
          }
        }
        @keyframes animation-right {
          100% {
            transform: translateX(-112.5%);
          }
        }
      `}</style>
    </Layout>
  );
};

export default Home;
