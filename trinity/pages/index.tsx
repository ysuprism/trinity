import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useRef, useState, useCallback } from 'react';
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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasRef2 = useRef<HTMLCanvasElement>(null);
  const updateRef = useRef<() => void>();

  const update = useCallback(() => {
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
        if (ref === divRef7) {
          if (top < (window.innerHeight * 2) / 3) {
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
    img.src = 'images/カラフル１.jpg';
    img.onload = () => {
      const canvas = canvasRef2.current;
      const ctx = canvas?.getContext('2d');
      ctx?.clearRect(0, 0, canvas?.width, canvas?.height);
      const pattern = ctx?.createPattern(img, 'no-repeat');
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
    updateRef.current = update;
  }, [update]);

  useEffect(() => {
    const canvas = canvasRef.current;
    for (let i = 0; i < num; i++) {
      const coordX = Math.random() * canvas?.width;
      const coordY = Math.floor(Math.random() * canvas?.height);
      const radius = Math.floor(Math.random() * 20);
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
      <div style={{ width: '100%', height: '700px', position: 'relative' }}>
        <canvas
          className='center'
          width={700}
          height={700}
          ref={canvasRef}
          style={{
            width: '100%',
            height: '700px',
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
        <div className='outer center' ref={divRef}>
          <div className='inner center'>
            <h1>家庭教師　個人契約の新たな形態</h1>
            <p>coming soon</p>
          </div>
        </div>
      </section>
      <section id='content'>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <div className='outer item1' ref={divRef2}>
              <div className='inner center'>
                <h1>チームでサポート</h1>
                <p>coming soon</p>
              </div>
            </div>
          </li>
          <li>
            <div className='outer item2' ref={divRef3}>
              <div className='inner center'>
                <h1>コンサルタントが最適な教師を紹介</h1>
                <p>coming soon</p>
              </div>
            </div>
          </li>
          <li>
            <div className='outer item3' ref={divRef4}>
              <div className='inner center'>
                <h1>厳選された参考書</h1>
                <p>coming soon</p>
              </div>
            </div>
          </li>
          <li>
            <div className='outer item4' ref={divRef5}>
              <div className='inner center'>
                <h1>無理のないカリキュラムの作成</h1>
                <p>coming soon</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section id='price'>
        <div className='outer center' ref={divRef6}>
          <div className='inner center'>
            <h1>料金</h1>
            <p>coming soon</p>
          </div>
        </div>
      </section>
      <section id='process'>
        <div className='outer center' ref={divRef7}>
          <div className='inner center'>
            <h1>ご契約までの流れ</h1>
            <p>coming soon</p>
          </div>
        </div>
      </section>
      <style jsx>{`
        ul {
          margin: 0;
        }

        section {
          width: 100%;
          height: 400px;
          position: relative;
          background: #000099;
        }

        .center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .outer {
          width: 80%;
          height: 80%;
          background: repeating-linear-gradient(-45deg, grey, grey 1%, black 1%, black 2%);
          border-radius: 20px;
          opacity: 0;
        }

        .inner {
          width: calc(100% - 20px);
          height: calc(100% - 20px);
          margin: auto;
          background: white;
          border-radius: 20px;
          text-align: center;
          opacity: 1;
        }

        #content {
          height: 1600px;
          background: #ffffee;
        }

        #content div.outer {
          width: 40%;
          height: 20%;
          position: absolute;
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

        #process {
          background: #ffffee;
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
