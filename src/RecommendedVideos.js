import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    channelImage="https://res.cloudinary.com/sl0/image/upload/v2/external-thumbnails/UCqrILQNl5Ed9Dz6CGMyvMTQ.jpg"
                    views="9.6k"
                subs="659"
                description="In todays video Aaron and Rishi will be explaining what VUI and Alexa Skills are, and also build an Alexa skill that prompts info about Team Clever Programmer . "
                timestamp="1 days ago"
                channel="Clever Programmer"
                title="Let's Build an Alexa Skill in 2020 (Voice user Interface) For Beginners"
                image="data:image/jpeg;base64,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"
                />
                <VideoCard
                    title="[Behind the Scenes] Kim Soo-hyun swoops in for a kiss | It's Okay Not To Be Okay"
                    views="1M Views"
                    timestamp="1 month ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJz8zmbUAQ2TbDZ2WvMaqAnUC8xKuFDRUr2EOfbZ=s900-c-k-c0x00ffffff-no-rj"
                    channel="The Swoon"
                    image="https://i.ytimg.com/vi/Ve5OaLT8LoQ/maxresdefault.jpg"
                />
                <VideoCard
                    title="Just a chill mix | English songs playlist - Lauv,James Smith"
                    views="2.7M Views"
                    timestamp="6 months ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJyJzou6pt9OBJ76WS0xTKL6Z4sAbtxvmwBRTm5ExA=s900-c-k-c0x00ffffff-no-rj"
                    channel="Love Life Lyrics"
                    image="https://i.ytimg.com/vi/NeLZwayxuZI/maxresdefault.jpg"
                />
                <VideoCard
                    title="YOU NEED TO UGRADE THESE TROOPS FIRST AT TH11"
                    views="184k Views"
                    timestamp="9 months ago"
                    channelImage="data:image/jpeg;base64,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"
                    channel="Clash Bashing!!"
                    image="https://i.ytimg.com/vi/sKnJjDMCflQ/maxresdefault.jpg"
                />
                <VideoCard
                    title="4000 PLASMA LIGHTSABER BUILD"
                    views="18M Views"
                    timestamp="1 week ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJyvSozT_erFICsQ8pO3bCcqO1H9SnkwrZUDUVk42w=s900-c-k-c0x00ffffff-no-rj"
                    channel="the Hacksmith"
                    image="https://i.ytimg.com/vi/xC6J4T_hUKg/maxresdefault.jpg"
                />
                <VideoCard
                    title="How I Type REALLY Fast (156 Words per Minute)"
                    views="2.7M Views"
                    timestamp="1 month ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJzY2Kppv3nT5iG-DUjbr9wYCkw55-OOgcRUOykI=s900-c-k-c0x00ffffff-no-rj"
                    channel="Ali Abdaal"
                    image="https://i.ytimg.com/vi/1ArVtCQqQRE/maxresdefault.jpg"
                />
                
            </div>
        </div>
    )
}

export default RecommendedVideos
