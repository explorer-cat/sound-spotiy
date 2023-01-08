import axios from "axios";

/**
 * 추천 관련 서비스
 * 플레이리스트,앨범,랭킹
 */
export default class RecommendationService {

    constructor(props) {
    }

    /**
     * @title 추천 음악
     * @param name 사용자 이름
     */
    getRecommendationMusic() {
        try {
            return [
                {
                    'id': 0,
                    'thumbnail': '/assets/images/rankList/rank1.png',
                    'title': '아픈 나를',
                    'artist': '성시경',
                    'albumInfo': {
                        'title' : 'Ballad Pop City',
                        'description' : '',
                    },
                },
                {
                    'id': 1,
                    'thumbnail': '/assets/images/rankList/rank2.png',
                    'title': 'OMG',
                    'artist': 'NewJeans',
                    'albumInfo': {
                        'title' : `NewJean 'OMG'`,
                        'description' : '',
                    },
                },
                {
                    'id': 2,
                    'thumbnail': '/assets/images/rankList/rank3.png',
                    'title': '다정히 내 이름을 부르면',
                    'artist': '경서예지 및 전건호',
                    'albumInfo': {
                        'title' : '다정히 내이름을 부르면(경서예지 x 전건호)',
                        'description' : '',
                    },
                },
                {
                    'id': 3,
                    'thumbnail': '/assets/images/rankList/rank4.png',
                    'title': '별거 없던 그 하루로',
                    'artist': '임창정',
                    'albumInfo': {
                        'title' : '별거 없던 그 하루로',
                        'description' : '',
                    },
                },
            ];
        } catch (error) {
            //응답 실패
            console.error(error);
        }

    }

}