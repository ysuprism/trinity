import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from '../components/index.module.css';
import Layout from '../components/layout';

interface Props {
  x: number;
  y: number;
  r: number;
}

const Home: NextPage = () => {
  const num = 50;

  const [circle, setCircle] = useState<Props[]>([]);

  const divRef = useRef<HTMLDivElement>(null);
  const divRef2 = useRef<HTMLDivElement>(null);
  const divRef3 = useRef<HTMLDivElement>(null);
  const divRef4 = useRef<HTMLDivElement>(null);
  const divRef5 = useRef<HTMLDivElement>(null);
  const divRef6 = useRef<HTMLDivElement>(null);
  const divRef7 = useRef<HTMLDivElement>(null);
  const divRef8 = useRef<HTMLDivElement>(null);
  const divRef9 = useRef<HTMLDivElement>(null);
  const divRef10 = useRef<HTMLDivElement>(null);
  const divRef11 = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasRef2 = useRef<HTMLCanvasElement>(null);
  const updateRef = useRef<() => void>();

  const updateCircle = useCallback(() => {
    const canvas = canvasRef.current;
    const tmp = [];
    if (canvas) {
      for (let i = 0; i < num; i++) {
        if (circle[i].x + 10 > canvas.width + circle[i].r) {
          const coordX = -circle[i].r;
          tmp.push({ ...circle[i], x: coordX });
        } else {
          const coordX = circle[i].x + 2;
          tmp.push({ ...circle[i], x: coordX });
        }
      }
      setCircle(tmp);
    }
  }, [circle]);

  useEffect(() => {
    const scrollHandler = (ref: React.RefObject<HTMLDivElement>) => () => {
      if (ref && ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const top = rect.top;
        if (ref === divRef11) {
          if (top < window.innerHeight) {
            ref.current.classList.add('fade-in');
          }
        } else {
          if (top < window.innerHeight / 2) {
            ref.current.classList.add('fade-in');
          }
        }
      }
    };

    const handler = scrollHandler(divRef);
    const handler2 = scrollHandler(divRef2);
    const handler3 = scrollHandler(divRef3);
    const handler4 = scrollHandler(divRef4);
    const handler5 = scrollHandler(divRef5);
    const handler6 = scrollHandler(divRef6);
    const handler7 = scrollHandler(divRef7);
    const handler8 = scrollHandler(divRef8);
    const handler9 = scrollHandler(divRef9);
    const handler10 = scrollHandler(divRef10);
    const handler11 = scrollHandler(divRef11);

    window.addEventListener('scroll', handler);
    window.addEventListener('scroll', handler2);
    window.addEventListener('scroll', handler3);
    window.addEventListener('scroll', handler4);
    window.addEventListener('scroll', handler5);
    window.addEventListener('scroll', handler6);
    window.addEventListener('scroll', handler7);
    window.addEventListener('scroll', handler8);
    window.addEventListener('scroll', handler9);
    window.addEventListener('scroll', handler10);
    window.addEventListener('scroll', handler11);

    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('scroll', handler2);
      window.removeEventListener('scroll', handler3);
      window.removeEventListener('scroll', handler4);
      window.removeEventListener('scroll', handler5);
      window.removeEventListener('scroll', handler6);
      window.removeEventListener('scroll', handler7);
      window.removeEventListener('scroll', handler8);
      window.removeEventListener('scroll', handler9);
      window.removeEventListener('scroll', handler10);
      window.removeEventListener('scroll', handler11);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvas2 = canvasRef2.current;
    const displayWidth = canvas?.clientWidth;
    const displayWidth2 = canvas2?.clientWidth;
    const displayHeight = canvas?.clientHeight;
    const displayHeight2 = canvas2?.clientHeight;

    if (canvas?.width != displayWidth || canvas?.height != displayHeight) {
      canvas?.width = displayWidth;
      canvas?.height = displayHeight;
    }

    if (canvas2?.width != displayWidth2 || canvas2?.height != displayHeight2) {
      canvas2?.width = displayWidth;
      canvas2?.height = displayHeight;
    }

    const img = new Image();
    img.src = 'images/logo-color.png';
    img.onload = () => {
      const canvas = canvasRef2.current;
      const ctx = canvas?.getContext('2d');
      ctx?.clearRect(0, 0, canvas?.width, canvas?.height);
      const pattern = ctx?.createPattern(img, 'repeat');
      ctx?.fillStyle = pattern;
      ctx?.beginPath();
      ctx?.moveTo(85, 50);
      ctx?.lineTo(85, 550);
      ctx?.lineTo(165, 450);
      ctx?.lineTo(165, 150);
      ctx?.fill();
      ctx?.beginPath();
      ctx?.moveTo(85, 550);
      ctx?.lineTo(555, 220);
      ctx?.lineTo(450, 250);
      ctx?.lineTo(165, 450);
      ctx?.fill();
      ctx?.beginPath();
      ctx?.moveTo(555, 220);
      ctx?.lineTo(85, 50);
      ctx?.lineTo(165, 150);
      ctx?.lineTo(450, 250);
      ctx?.fill();
      ctx?.beginPath();
      ctx?.moveTo(230, 220);
      ctx?.lineTo(220, 360);
      ctx?.lineTo(360, 260);
      ctx?.fill();
    };
  }, []);

  useEffect(() => {
    updateRef.current = updateCircle;
  }, [updateCircle]);

  useEffect(() => {
    const canvas = canvasRef.current;
    for (let i = 0; i < num; i++) {
      let radius = Math.random() * 15;
      let coordX = Math.random() * canvas?.width;
      let coordY = Math.random() * canvas?.height;
      coordY = Math.min(Math.max(coordY, 2 * radius), canvas?.height - 2 * radius);
      circle.push({ x: coordX, y: coordY, r: radius });
    }
    const timerID = setInterval(() => updateRef.current(), 50);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    ctx?.clearRect(0, 0, canvas?.width, canvas?.height);
    ctx?.fillStyle = '#EEEEEE';
    for (let i = 0; i < num; i++) {
      ctx?.beginPath();
      ctx?.arc(circle[i].x, circle[i].y, circle[i].r, 0, Math.PI * 2, true);
      ctx?.fill();
    }
  }, [circle]);

  return (
    <Layout>
      <Head>
        <title>トップページ</title>
      </Head>
      <div
        style={{
          width: '100%',
          height: '600px',
          position: 'relative',
        }}
      >
        <canvas
          className='center'
          width={600}
          height={600}
          ref={canvasRef}
          style={{
            width: '100%',
            height: '600px',
          }}
        ></canvas>
        <canvas
          className='center'
          width={600}
          height={600}
          ref={canvasRef2}
          style={{
            width: '600px',
            height: '600px',
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
          }}
        >
          Medical Trinity
        </Typography>
      </div>
      <section id='title'>
        <h1>家庭教師個人契約の新たな形</h1>
        <p>
          従来の家庭教師個人契約は、教育を受ける側が掲示板などで先生を探し、選ぶ形となっています。この方式は色々な先生を選ぶことができ、金額等条件も自由であるため選択肢の幅が広い反面
          <ul>
            <li>
              <span>先生選びに手間がかかる</span>
            </li>
            <li>
              <span>契約するまでは丁寧だが、契約後はあまり授業に力を入れてくれない...</span>
            </li>
            <li>
              <span>明確なカリキュラム設定がないため、勉強のゴールが見えない...</span>
            </li>
          </ul>
          などの問題が発生しがちです。Medical Trinity では、この問題を解決すべく
          <ul>
            <li>
              <span>紹介役の教師が丁寧にヒアリング、教師をご紹介</span>
            </li>
            <li>
              <span>難関大合格という能力が保証されている教師が</span>
            </li>
            <li>
              <span>チームで相互に高め合い、指導を形成していく</span>
            </li>
          </ul>
          という新たな形態をとります。この仕組みと学生同士の積極的な活動で先生選びの手間を省き、質の高い指導を提供することがMedical Trinity の目的です。
        </p>
      </section>
      <section id='concept'>
        <h1 className='h1'>Concept</h1>
        <div className='wrapper'>
          <div className='outer' ref={divRef2}>
            <span className='span-left'>01</span>
            <div className='inner'>
              <h2 className='h2-left'>医学部生等の優秀な先生が指導</h2>
              <div className='wrapper2'>
                <p>
                  指導を担当する先生は、実際に最難関の受験を勝ち抜いた優秀な先生達です。（主に日本医科大学在籍生）
                  <br></br>
                  受験で身につけた高い学力と深い理解をベースにし、教科の躓きポイントをわかりやすくご説明いたします。
                </p>
                <img className='img-right' src='/images/class.jpg' alt='医学部生等の優秀な先生が指導'></img>
              </div>
            </div>
          </div>
          <div className='outer' ref={divRef3}>
            <div className='inner'>
              <span className='span-right'>02</span>
              <h2 className='h2-right'>チームでサポート</h2>
              <div className='wrapper2'>
                <img className='img-left' src='/images/discussion.jpg' alt='チームでサポート'></img>
                <p>
                  家庭教師や個別指導塾は生徒と先生の繋がりは密接である反面、先生同士の繋がりは薄くなりがちです。
                  <br></br>
                  Medical Trinity
                  ではカリキュラムの作成、志望校対策、参考書選択などをチームで協力して行うため、1人で活動するよりも高品質な指導を提供可能です。
                  <br></br>
                  個別指導に特化した学生の（厳しめの）部活のようなものだと考えてください。
                </p>
              </div>
            </div>
          </div>
          <div className='outer' ref={divRef4}>
            <div className='inner'>
              <span className='span-left'>03</span>
              <h2 className='h2-left'>最適な教師を紹介</h2>
              <div className='wrapper2'>
                <p>
                  紹介役の教師が丁寧にヒアリングを行うことで、Medical Trinity
                  の中から生徒さんに合った先生をご紹介致します。<br></br>
                  ヒアリングシートはこちら<br></br>
                  「外科を目指す先生が良い」「◯◯部の先生に教わりたい」などのご要望がございましたら、可能な限りご対応いたします。
                </p>
                <img className='img-right' src='/images/consult.jpg' alt='最適な教師を紹介'></img>
              </div>
            </div>
          </div>
          <div className='outer' ref={divRef5}>
            <div className='inner'>
              <span className='span-right'>04</span>
              <h2 className='h2-right'>選び抜かれた参考書</h2>
              <div className='wrapper2'>
                <img className='img-left' src='/images/book.jpg' alt='選び抜かれた参考書'></img>
                <p>
                  教師が使用したことがある教材（それで合格したもの等）、よく売れている教材、流行っている教材などから教師同士で話し合い、実際に効果的な教材を厳選して使用致します。
                  <br></br>
                  使用教材一覧はこちら<br></br>
                  受験合格・定期テスト対策などの目的に合わせて正しい参考書を使うことで成績は必ず伸びます。
                  <br></br>Medical Trinity では正しい参考書選びをサポートいたします。<br></br>
                  ※ご要望がございましたら、一覧に無い教材を用いた指導も可能です。
                </p>
              </div>
            </div>
          </div>
          <div className='outer' ref={divRef6}>
            <div className='inner'>
              <span className='span-left'>05</span>
              <h2 className='h2-left'>常に最善のカリキュラム</h2>
              <div className='wrapper2'>
                <p>
                  大人数の生徒に同じ授業を行う集団塾とは異なり、現在の学力・志望校・学習方法の癖等を把握して、無駄を徹底的に省いた生徒さん個人に最善のカリキュラムを提案致します。
                  <br></br>
                  生徒さんの予定に合わせて、無理のないカリキュラムを組むことで、着実な進歩を目指します。
                </p>
                <img className='img-right' src='/images/calendar.jpg' alt='常に最善のカリキュラム'></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='price'>
        <h1 className='h1'>Fee</h1>
        <div className='wrapper'>
        <div className='outer' ref={divRef7}>
          <div className='inner'>
            <h2>料金</h2>
            <div className='wrapper2'>
              <p>
                高1・2生<br></br>4000円/1時間
              </p>
              <p>
                受験学年<br></br>5000円/1時間
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section id='process'>
        <h1 className='h1'>Contact</h1>
        <h2>ご契約までの流れ</h2>
        <div className='wrapper' ref={divRef8}>
          <div className='outer'>
            <div className='inner'>
              <span className=''>01</span>
              <p className=''>ヒヤリングシートからお申込みください。</p>
            </div>
          </div>
          <div className='outer'>
            <div className='inner'>
              <span className=''>02</span>
              <p className=''>
                ヒヤリングシートを元に、お電話もしくはメールで紹介役が丁寧に聞き取りを行い、生徒さんに最適な先生をお選びいたします。また、この際に初回授業で指導する内容のご相談もいたします。
              </p>
            </div>
          </div>
          <div className='outer'>
            <div className='inner'>
              <span className=''>03</span>
              <p>
                紹介役が同伴し、ご自宅や喫茶店で、先生のご紹介、先生との1:1の体験授業を行います。
                総時間は90分程で、交通費以外のご料金はいただきません。また、体験授業で先生と相性が良くないと感じられた場合は、一度だけ先生を変更し、再度体験授業を申し込みいただくことも可能です。
              </p>
            </div>
          </div>
          <div className='outer'>
            <div className='inner'>
              <span className=''>04</span>
              <p>
                体験授業を元に、ご紹介した先生の採用の可否を決定していただきます。採用の場合、初回授業日の決定をしていただき、いよいよ授業の開始となります。
              </p>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        h1, h2, p{
          margin: 0;
        }

        p {
          font-size: 20px;
        }

        section {
          width: 100%;
          color: white;
          padding: 40px; 
        }

        .center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .wrapper {
          display: flex;
          flex-flow: column;
          justify-content: space-around;
          align-items: center;
        }

        .wrapper2 {
          display: flex;
          margin: 20px 20px;
        }

        .outer {
          position: relative;
          width: 80%;
          margin: 40px auto;
          background-image: url('images/logo-color.png');
          border-radius: 20px;
          opacity: 0;
        }

        .inner {
          width: calc(100% - 20px);
          height: calc(100% - 20px);
          margin: 10px auto;
          padding-top: 40px; 
          background-color: white;
          color: black;
          border-radius: 20px;
          opacity: 1;
        }

        #title {
          background-color: #000099;
        }

        #title h1 {
          margin-bottom: 40px;
          text-align: center;
          font-size: 50px;
          color: #f0e68c;
        }

        #title p {
          width: 60%;
          margin: 0 auto;
          font-weight: bold;
        }

        #title span {
          box-shadow: 0px -5px 3px -1px #ff0461 inset;
        }

        #concept p,img {
          width: 50%;
        }

        .img-left {
          margin-right: 20px;
        }

        .img-right {
          margin-left: 20px;
        }

        .span-left {
          position: absolute;
          top: -60px;
          left: 20px;
          font-size: 100px;
          color: #ff9900;
        }

        .span-right {
          position: absolute;
          top: -60px;
          right: 20px;
          font-size: 100px;
          color: #ff9900;
        }

        .h1 {
          margin-bottom: 40px;
          font-size: 100px;
          color: rgba(0, 255, 255, 0.5);
        }

        .h2-left {
          margin-left: 20px;
        }

        .h2-right {
          text-align: end;
          margin-right: 20px;          
        }

        #price {
          background-color: #eeeeee;
        }

        #price h2 {
          text-align: center;
          font-size: 50px;

        }

        #price .wrapper2 {
          margin-bottom: 40px;
        }

        #price p {
          flex: 1;
          text-align: center;
          font-size: 50px;
        }

        #process h2 {
          margin: 20px auto;
          text-align: center;
          font-size: 50px;
          color: black;
        }

        #process span {
          position: absolute;
          top: 10px;
          left: 20px;
          font-size: 60px;
          color: #FF6699;
        }

        #process p {
          width: 60%;
          margin: 0 auto 40px;
        }

        #process .wrapper {
          opacity: 0;
        }

        #process .outer {
          opacity: 1;
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .fade-in {
          animation: fade-in 1s ease-in 0s forwards;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
