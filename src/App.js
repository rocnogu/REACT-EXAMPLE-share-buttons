import React from "react";
//
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton
} from "react-share";
//
import {
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  WhatsappIcon
} from "react-share";
//
export default function App() {
  return (
    <div className="mainDiv">
      <div className="shareButtons">
        <FacebookShareButton
          url={"https://www.facebook.com/"}
          quote={"tiltehere"}
          description={"description"}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton
          url={"https://twitter.com"}
          title={"tiltehere"}
          hashtags={[]}
          className="Demo__some-network__share-button"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <InstapaperShareButton
          url={"https://www.instapaper.com/"}
          quote={"tiltehere"}
          description={"description"}
        >
          <InstapaperIcon size={32} round />
        </InstapaperShareButton>

        <LinkedinShareButton
          url={"https://www.linkedin.com/"}
          quote={"tiltehere"}
          description={"description"}
          className="Demo__some-network__share-button"
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        <PinterestShareButton
          url={"https://www.pinterest.com/"}
          quote={"tiltehere"}
          description={"description"}
          className="Demo__some-network__share-button"
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>

        <RedditShareButton
          url={"https://www.reddit.com/"}
          quote={"tiltehere"}
          description={"description"}
          className="Demo__some-network__share-button"
        >
          <RedditIcon size={32} round />
        </RedditShareButton>

        <TumblrShareButton
          url={"https://www.tumblr.com/"}
          quote={"tiltehere"}
          description={"description"}
          className="Demo__some-network__share-button"
        >
          <TumblrIcon size={32} round />
        </TumblrShareButton>

        <TelegramShareButton
          url={"https://www.web.telegram.org.com/"}
          quote={"tiltehere"}
          description={"description"}
          className="Demo__some-network__share-button"
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>

        <ViberShareButton
          url={"https://www.viber.com/"}
          quote={"tiltehere"}
          description={"description"}
          className="Demo__some-network__share-button"
        >
          <ViberIcon size={32} round />
        </ViberShareButton>

        <WhatsappShareButton
          url={"https://www.web.whatsapp.com.com/"}
          quote={"tiltehere"}
          description={"description"}
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
}
