import type { NextPage } from 'next';
import styles from './index.module.css';


const LandingPage:NextPage = () => {
  	return (
    		<div className={styles.landingPage}>
      			<div className={styles.landingPageChild} />
      			<img className={styles.emojiWavingHandSign} alt="" src={`🦆 emoji "waving hand sign".svg`} />
      			<b className={styles.findFiveNew}>Find Five New Friends in Five Minutes</b>
      			<i className={styles.worriedAboutThe}>{`Worried about the cold start to the conversation? Your AI Companion, who knows you best, will facilitate that first conversation for you! `}</i>
      			<div className={styles.answerAFew}>Answer a few questions to help us get to know you, and then we’ll match you with people we feel you’ll build a connection with!</div>
      			<b className={styles.findMyFriends}>Find My Friends</b>
      			<div className={styles.neverFeelAlone}>Never Feel Alone Again</div>
      			<div className={styles.nufriendsWrapper}>
        				<div className={styles.nufriends}>nufriends</div>
      			</div>
      			<img className={styles.iconMail} alt="" src={`🦆 icon "mail".svg`} />
      			<img className={styles.emojiWavingHandSign1} alt="" src={`🦆 emoji "waving hand sign".svg`} />
      			<img className={styles.bustsInSilhouetteIcon} alt="" src="busts_in_silhouette.svg" />
      			<img className={styles.landingPageItem} alt="" src="Group 105.svg" />
    		</div>);
};

export default LandingPage;
