import Head from 'next/head';
import Image from 'next/image';
import { Flex, Heading, Button } from '@chakra-ui/react';
import { BsSpotify, BsYoutube } from 'react-icons/bs';
import { SiApplemusic, SiTidal } from 'react-icons/si';

import diambaImg from '../public/cudeegua.gif';

export default function Home() {
  return (
    <>
      <Head>
        <title>Diamba Bros</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="/favicon.  background-image: url('../public/cudeegua.gif');
ico"
        />
      </Head>
      <Flex
        direction="column"
        justifyItems="center"
        alignItems="center"
        textAlign="center"
        wrap="wrap"
      >
        <Heading
          as="h1"
          color="white"
          size="2xl"
          mt="12"
          px="16"
          textShadow="3px 3px #046244"
        >
          5 Estrelas - Diamba Bros. Disponível nas seguintes plataformas{' '}
        </Heading>
        <Flex
          direction="column"
          flexWrap="wrap"
          px="16"
          py="10"
          mt="10"
          bg="#008148"
          borderRadius="2xl"
          boxShadow="dark-lg"
        >
          <Button
            href="https://open.spotify.com/album/4F4vPCQQvm2D0rNo5UbYHM?si=8uwoJqEmTwmudO4qH9DY0Q"
            target="blank"
            as="a"
            colorScheme="red"
            my="3"
            size="lg"
            leftIcon={<BsSpotify />}
          >
            Spotify
          </Button>
          <Button
            href="https://music.apple.com/us/album/5-estrelas-ep/1627104736"
            as="a"
            target="blank"
            colorScheme="red"
            my="3"
            size="lg"
            leftIcon={<SiApplemusic />}
          >
            Apple Music
          </Button>
          <Button
            as="a"
            href="https://tidal.com/browse/album/231581834"
            target="blank"
            colorScheme="red"
            my="3"
            size="lg"
            leftIcon={<SiTidal />}
          >
            Tidal
          </Button>
          <Button
            as="a"
            href="https://www.youtube.com/channel/UCzssA3FGOCKAWds_xecppdw/videos"
            target="blank"
            colorScheme="red"
            my="3"
            size="lg"
            leftIcon={<BsYoutube />}
          >
            Youtube
          </Button>
        </Flex>
      </Flex>

      <footer></footer>
    </>
  );
}
