import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>トップページ</title>
      </Head>
      <Image src='/images/eth.png' width={400} height={300} layout='responsive'></Image>
      <section id='title'>
        <div className='center'>
          <p>家庭教師　個人契約の新たな形態</p>
        </div>
      </section>
      <section id='content'>
        <div className='left'>
          <p>チームでサポート</p>
        </div>
        <div className='right'>
          <p>コンサルタントが最適な教師を紹介</p>
        </div>
        <div className='left'>
          <p>選び抜かれた参考書</p>
        </div>
        <div className='right'>
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
          <p>契約までの流れ</p>
        </div>
      </section>
      <style jsx>{`
        p {
          width: 400px;
          height: 300px;
          border: 3px solid black;
          border-radius: 40px;
          background-color: #eeeeee;
          text-align: center;
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
