import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { RefObject, useEffect, useRef } from 'react';
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
      <Image src='/images/eth.png' width={400} height={300} layout='responsive' alt='ETH'></Image>
      <section id='title'>
        <div className='center'>
          <div>
            <p>家庭教師　個人契約の新たな形態</p>
          </div>
        </div>
      </section>
      <section id='content'>
        <div className='left' ref={inputRef}>
          <p>チームでサポート</p>
        </div>
        <div className='right' ref={inputRef2}>
          <p>コンサルタントが最適な教師を紹介</p>
        </div>
        <div className='left' ref={inputRef3}>
          <p>選び抜かれた参考書</p>
        </div>
        <div className='right' ref={inputRef4}>
          <p>無理のないカリキュラムの作成</p>
        </div>
      </section>
      <section id='price'>
        <div className='center'>
          <p>料金</p>
        </div>
      </section>
      <section id='process'>
        <div className='center'>
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
      `}</style>
    </Layout>
  );
};

export default Home;
