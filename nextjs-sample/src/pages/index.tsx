import { Client } from '@notionhq/client';
import { GetStaticProps } from 'next';


const notion = new Client({
    auth: process.env.NOTION_TOKEN
});

export const getStaticProps: GetStaticProps<{}> = async () => {
    const database = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID || ''
    })
    
    return {
      props: {}
    }
};

const Home = () => {
  return <div></div>;
}

export default Home;
