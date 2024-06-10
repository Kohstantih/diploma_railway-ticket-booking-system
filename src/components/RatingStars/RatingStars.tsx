import { useEffect, useState } from 'react';

import './RatingStars.css';

export default function RatingStars({
  count,
  setRating,
}: {
  count: number;
  setRating: (number: number) => void;
}) {
  const [starsElement, setStarsElement] = useState<JSX.Element[]>([]);
  const [activeStar, setActiveStar] = useState(0);

  useEffect(() => {
    const result: JSX.Element[] = [];

    for (let i = 1; i <= count; i += 1) {
      result.push(
        <li
          key={i}
          onClick={() => {
            setRating(i);
            setActiveStar(i);
          }}
          className="rating-stars__item"
        >
          <svg
            width="46"
            height="44"
            viewBox="0 0 46 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 3.23607L27.4373 16.8926L27.6618 17.5836H28.3883H42.7477L31.1307 26.0238L30.5429 26.4508L30.7675 27.1418L35.2047 40.7984L23.5878 32.3582L23 31.9311L22.4122 32.3582L10.7953 40.7984L15.2325 27.1418L15.4571 26.4508L14.8693 26.0238L3.25233 17.5836H17.6117H18.3382L18.5627 16.8926L23 3.23607Z"
              stroke="white"
              strokeWidth="2"
              fill={`${i <= activeStar ? 'white' : 'none'}`}
            />
          </svg>
        </li>
      );
    }

    setStarsElement(result);
  }, [activeStar, count, setRating]);

  return <ul className="rating-stars__list">{starsElement && starsElement}</ul>;
}
