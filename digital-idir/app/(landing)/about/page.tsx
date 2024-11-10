import FeaturesDetail from '@/components/ui/FeaturesDetail';
import MemorialCard from '@/components/ui/MemorialCard';
import MVV from '@/components/ui/MVV';
import Scroll from '@/components/ui/Scroll';
import Team from '@/components/ui/Team';
import React from 'react';

export default function About() {
  return (
    <div className=" text-white md:mx-40 pt-24 px-5 md:px-0">
      <h1 className="text-white font-bold text-4xl text-center py-10">
        About Us
      </h1>
      <MVV />

      <div className="py-28">
        <h2 className="text-white font-bold text-3xl text-center py-10">
          Features
        </h2>
        <div className="flex flex-col gap-36">
          <FeaturesDetail
            num={1}
            image="/assets/pay.jpg"
            title="Payment Integration with Chapa for Monthly Dues and Item Renting"
            desc="Our integration with Chapa, a secure and widely used Ethiopian payment gateway, enables users to manage their monthly dues and item rentals effortlessly."
            list={[
              'Monthly Dues: Users are prompted to pay their membership dues directly through Chapa. Once logged in, users can easily see upcoming payments or overdue dues and complete transactions in just a few clicks. Chapa’s mobile-friendly payment process makes it convenient for members to stay up-to-date on their payments anytime, anywhere. Payment receipts are generated immediately, and members can access their complete payment history at any time.',
              "Item Renting: Our platform allows users to rent out shared community items—such as chairs, tents, or sound equipment—through the same seamless Chapa integration. Members can browse available items, select the rental period, and pay through Chapa for a secure transaction. A smart reminder system sends notifications to both parties involved, including reminders to the renter if they haven't returned the items by the agreed-upon date.",
            ]}
          />

          <FeaturesDetail
            num={2}
            image="/assets/notify.jpg"
            title="Email Notifications for News, Announcements, and Event Reminders"
            desc="We provide an intelligent, automated email notification system that keeps members informed and engaged with the latest community updates."
            list={[
              "News and Announcements: Whenever an admin adds a news update or makes an announcement, an automatic email notification is sent to all members, ensuring everyone stays informed about the latest happenings within the community. Members receive these updates directly in their inbox, formatted professionally and branded with the community's logo, so they know the information is reliable.",
              "Today's Events: Each morning, an email summary is sent to members with details of events happening that day, ensuring no one misses out on important gatherings. These reminders include time, location, and relevant links for RSVP, simplifying event attendance.",
            ]}
          />

          <FeaturesDetail
            num={3}
            image="/assets/pro.jpg"
            title=" Memorial Feature for Remembering Deceased Members"
            desc="In Ethiopian culture, honoring those who have passed is a deeply rooted tradition. Our Memorial feature helps the community commemorate deceased members and fosters remembrance."
            list={[
              'Dedicated Memorial Page: This page lists names, photos, and dates of passing for all deceased members, creating a virtual remembrance space. Family members can add a brief biography or a note for loved ones, and fellow members can view, leave messages, or attend online memorial services.',
              'Anniversary Reminders: The system tracks the anniversaries of these individuals and sends notifications to community members on significant dates. This helps keep the memory of departed members alive in the community’s collective memory and allows others to express their respects, whether in the form of attending memorial gatherings or offering condolences.',
            ]}
          />

          <FeaturesDetail
            num={4}
            image="/assets/chart.png"
            title="Transaction History with Charts"
            desc="To provide clear insights into financial activity, we offer a detailed transaction history feature that includes visually engaging charts and graphs."
            list={[
              'Comprehensive Record: Every payment, from monthly dues to item rentals, is logged with date, amount, and purpose, making it easy for members to keep track of their financial contributions. Members can filter these records by date range, transaction type, or amount.',
              'Visual Analytics: To simplify financial tracking, our system generates monthly and annual spending reports with pie charts and bar graphs. Members can see the distribution of their contributions and expenses across different categories, like membership dues, event contributions, and item rentals. These visualizations make it simple to understand spending patterns and encourage more transparent financial management.',
            ]}
          />

          <FeaturesDetail
            num={5}
            image="/assets/signup.webp"
            title="Google and Email Sign-Up"
            desc="To ensure seamless access, Digital Idir provides both Google and email-based sign-up options."
            list={[
              'Google Sign-Up: Members can choose to sign up with their Google account, making registration as simple as a few clicks. By using Google’s OAuth authentication, users are assured of a secure login experience, eliminating the need to remember additional passwords. Google sign-up also helps prevent spam registrations by verifying that each user has a valid Google account.',
              'Email Sign-Up: Alternatively, users can register with an email address, providing details such as name, email, and password. For security, the system sends a verification email after sign-up, which users must confirm to activate their accounts. This verification process ensures that all accounts belong to real users, promoting a secure and trustworthy platform for all members.',
            ]}
          />
        </div>
      </div>

      <div className="py-28">
        <Team />
      </div>
    </div>
  );
}
