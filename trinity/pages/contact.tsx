import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

const label: string[] = ['氏名', 'フリガナ', '住所', 'メールアドレス', '在籍している学校'];
const label2: string[] = ['希望する教科', '備考欄'];
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>お問い合わせフォーム</title>
      </Head>
      <h1>お問い合わせフォーム</h1>
      <form method='post'>
        {label.map((l) => (
          <>
            <label>{l}</label>
            <input type='text'></input>
          </>
        ))}
        {label2.map((l) => (
          <>
            <label>{l}</label>
            <textarea wrap='soft'></textarea>
          </>
        ))}
      </form>
      <style jsx>{`
        h1 {
          text-align: center;
        }
        form {
          width: 500px;
          margin: auto;
          margin-top: 50px;
        }
        textarea {
          width: 300px;
          height: 100px;
          margin-left: 100px;
          font-size: 18px;
        }
        label {
          display: block;
          margin-top: 10px;
          margin-left: 100px;
        }
        input {
          width: 300px;
          margin-left: 100px;
          font-size: 18px;
        }
      `}</style>
    </Layout>
  );
}
