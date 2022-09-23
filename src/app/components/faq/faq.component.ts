import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  public sideData: any = [
    { name: 'About Frenn', group: 'about' },
    { name: 'App Sign-Up', group: 'signup' },
    { name: 'Credit Limit and Plans', group: 'credit' },
    { name: 'Loan Repayment', group: 'loan' },
    { name: 'Late Repayment', group: 'late' },
    { name: 'My Account', group: 'account' },
    { name: 'Security and Privacy', group: 'security' },
  ];
  activeGroup: string = this.sideData[0].group;

  data_1: any = [
    {
      id: 0,
      ques: 'What is Frenn?',
      ans: [
        {
          text: 'Frenn is a fintech company helping Nigerians solve their individual and business needs.',
          isLink: false,
        },
        {
          text: 'Frenn offers a hassle-free consumer and business financing mobile application that allows Frenn customers to access credit for their everyday needs at a low interest rate - for small or large ticket purchases.',
          isLink: false,
        },
        {
          text: 'Download the Frenn app and sign up to access your personal line of credit and enjoy the following services:',
          isLink: false,
        },
      ],
      list: [
        'Get Cash to your Bank Account',
        'Pay Electricity Bills',
        'Buy Airtime',
        'Buy Data/Internet Subscription',
        'Pay Cable TV subscriptions',
      ],
      afterText: ['More products and services coming soon!'],
    },
    {
      id: 1,
      ques: 'How do I access Frenn products and services?',
      ans: [
        {
          text: 'We are a mobile app only service. Download the Frenn app and sign up',
          isLink: true,
        },
      ],
    },
  ];

  data_2: any = [
    {
      id: 0,
      ques: 'How can I sign up on the Frenn App?',
      ans: [
        {
          text: 'It is as easy as the following steps:',
          isLink: false,
        },
      ],
      list: [
        { name: 'Download the app from LINK TO APP', isLink: true },
        { name: 'Provide us your email address', isLink: false },
        {
          name: 'Provide us your BVN, phone number and selfie to verify your identity',
          isLink: false,
        },
      ],
    },
    {
      id: 1,
      ques: 'What is BVN?',
      ans: [
        {
          text: 'BVN is a Bank Verification Number.',
          isLink: false,
        },
      ],
    },
    {
      id: 2,
      ques: 'Why do you need my BVN?',
      ans: [
        {
          text: 'We use your BVN to verify your identity.',
          isLink: false,
        },
      ],
    },
    {
      id: 3,
      ques: 'How can I retrieve my BVN?',
      ans: [
        {
          text: 'Kindly dial *565*0# with your BVN registered number to retrieve your BVN',
          isLink: false,
        },
      ],
    },
    {
      id: 4,
      ques: 'Why can’t I get an OTP for my BVN verification?',
      ans: [
        {
          text: 'Please note that your BVN has a phone number attached to them at the point of registration and in order to verify either of them, an OTP (One Time Password) is usually sent to that particular phone number. If you are not receiving an OTP, it could be as a result of the following:',
          isLink: false,
        },
      ],
      list: [
        'You do not have access to the BVN registered phone number',
        'You may have enabled DND (Do Not Disturb) on that line',
        'Temporary network issues',
      ],
    },
    {
      id: 5,
      ques: 'Why do you need my selfie?',
      ans: [
        {
          text: 'This is to verify your identity.',
          isLink: false,
        },
      ],
    },
  ];

  data_3: any = [
    {
      id: 0,
      ques: 'What is Frenn credit line?',
      ans: [
        {
          text: 'A personal line of credit is somewhat of a crossover between a credit card and personal loan: You use only as much as you need, and pay interest only on what you use.',
          isLink: false,
        },
        {
          text: 'Based on our assessment of your creditworthiness, we will give you access to the credit line that can be utilised in accordance with the terms presented on the Frenn app account. There is a fixed repayment schedule for each utilisation.',
          isLink: false,
        },
        {
          text: 'The credit limit, the maximum amount you have access to, is dependent on several factors, for example customer’s credit score and verifiable income. The credit limit is constantly monitored and adjusted according to the risk profile and usage.',
          isLink: false,
        },
      ],
    },
    {
      id: 1,
      ques: 'How can the credit limit be utilised?',
      ans: [
        {
          text: 'You can utilise the credit limit from your account on the Frenn app pay for:',
          isLink: false,
        },
      ],
      list: ['Bill payment or top-up airtime', 'Withdraw cash'],
    },
    {
      id: 2,
      ques: 'What are the benefits of Frenn credit line?',
      ans: [
        {
          text: 'Some of the benefits of Frenn credit line are:',
          isLink: false,
        },
      ],
      list: [
        'Flexibility. Unlike a single personal loan where you receive a lump sum of money upfront, a line of credit lets you withdraw funds when you need them.Fast access to funds. You know how much is available at all times and you can withdraw very quickly without any burdensome application process.',
        `You only pay interest on the amount that you've drawn.`,
        'The personal line of credit is an unsecured loan, which means you won’t need a house or car as collateral in order to qualify.',
      ],
    },
    {
      id: 3,
      ques: 'Who can use Frenn credit line?',
      ans: [
        {
          text: 'Nigerian residents living in Lagos who are 20-59 years old and have regular income. It does not matter whether you are a salary earner or a business owner.',
          isLink: false,
        },
      ],
    },
    {
      id: 4,
      ques: 'What are the minimum requirements to access Frenn credit line?',
      ans: [
        {
          text: 'The access to credit line is dependent on our risk and creditworthiness assessment. The minimum requirements are:',
          isLink: false,
        },
      ],
      list: [
        'Valid BVN',
        'Valid email address',
        'Valid phone number',
        'An operational bank account',
        'Selfie to verify your identity',
        'Linked debit card or account',
      ],
    },
    {
      id: 5,
      ques: 'What is a credit limit and how does it work?',
      ans: [
        {
          text: 'The credit limit is the maximum amount of credit assigned to you at a given time. Frenn users will be able to move from lower credit limit to higher limit based on their credit score, verifiable income and behaviour within the Frenn system. The more you use the Frenn product the more you stand a good chance of a higher credit limit.',
          isLink: false,
        },
      ],
    },
    {
      id: 6,
      ques: 'What is a credit limit and how does it work?',
      ans: [
        {
          text: 'The credit limit is the maximum amount of credit assigned to you at a given time. Frenn users will be able to move from lower credit limit to higher limit based on their credit score, verifiable income and behaviour within the Frenn system. The more you use the Frenn product the more you stand a good chance of a higher credit limit.',
          isLink: false,
        },
      ],
    },
    {
      id: 7,
      ques: 'What does “Unlock plan” mean?',
      ans: [
        {
          text: 'Unlocking a plan simply means accessing your credit line or a specific credit limit. This requires the customer to meet the defined credit limit conditions.',
          isLink: false,
        },
      ],
    },
    {
      id: 8,
      ques: 'How can I increase my credit limit?',
      list: [
        'Complete your profile',
        'Link your bank account for income verification',
        'Repay due loans on time',
        'Transact more often',
      ],
    },
    {
      id: 9,
      ques: 'What is the maximum amount I can access?',
      ans: [
        {
          text: 'You can access upto N300,000 worth of credit. Please note that as you repay your loans, you also replenish your credit limit for further use.',
          isLink: false,
        },
      ],
    },
    {
      id: 10,
      ques: 'What are the interest and fees Frenn charges?',
      ans: [
        {
          text: 'Our interest rates range from 3% to 8% per month. We do not charge you for the access to the credit line, only when you utilise it we apply interest. We will always present to you the loan terms for acceptance before concluding the utilisation request.',
          isLink: false,
        },
        {
          text: 'For paying bills, you are charged NGN 100 upfront fee.',
          isLink: false,
          isRed: true,
        },
        {
          text: 'We also charge a one-time NGN 50 fee when you link your card for auto debit. The linking of the card is a requirement to access your credit line.',
          isLink: false,
        },
      ],
    },
  ];

  data_4: any = [
    {
      id: 0,
      ques: 'When do I repay what I have spent?',
      ans: [
        {
          text: `You're expected to pay back what you've spent on your credit plan on the due date specified in your loan repayment schedule. We will debit your card on the due date and hence you need to ensure that you have sufficient funds on your account.`,
          isLink: false,
        },
      ],
    },
    {
      id: 1,
      ques: 'How can I repay my credit limit?',
      ans: [
        {
          text: 'Auto debit is the primary method of payment and a requirement for disbursing any loan. However, you can also repay your loan by logging in to your Frenn app account and using the one-time account or card debit or by making a transfer to the unique NUBAN we have provided you. Please note that your bank or an agent might charge you fees for these transactions.',
          isLink: false,
        },
      ],
    },
    {
      id: 2,
      ques: 'Where can I see my repayment schedule?',
      ans: [
        {
          text: 'The loan repayment schedule with the due date and amount are always available on the Frenn app. We will also send you reminders before and on due dates so you know to sufficiently fund your account.',
          isLink: false,
        },
      ],
    },
    {
      id: 3,
      ques: 'How does the auto-debit work?',
      ans: [
        {
          text: 'This requires you link your debit card and Frenn automatically charges you the due amount on the agreed due date. As easy as that! Please ensure that the account linked to your card is sufficiently funded before your loan repayment due dates.',
          isLink: false,
        },
      ],
    },
    {
      id: 4,
      ques: 'Can I extend my loan duration?',
      ans: [
        {
          text: 'The repayment schedule is defined by the plan you choose to use during the utilisation request and cannot be changed.',
          isLink: false,
        },
      ],
    },
  ];

  data_5: any = [
    {
      id: 0,
      ques: 'What happens if I don’t repay my loan on time?',
      ans: [
        {
          text: `We present the terms of late repayment always when you request a loan from us. Please refer to your loan terms. Late repayment affects your credit rating and can impact your access to credit from any financial institutions as you are blacklisted by credit bureaus.`,
          isLink: false,
        },
      ],
    },
    {
      id: 1,
      ques: 'Does Frenn charge a penalty for late payment?',
      ans: [
        {
          text: 'Yes, we encourage you to repay on time to keep enjoying available credit. The terms of your loan are always presented to you for acceptance before disbursement.',
          isLink: false,
        },
      ],
    },
  ];

  data_6: any = [
    {
      id: 0,
      ques: 'How do I change my personal details?',
      ans: [
        {
          text: `Login to your account to change your personal details.`,
          isLink: false,
        },
      ],
    },
    {
      id: 1,
      ques: 'What is Transaction PIN?',
      ans: [
        {
          text: 'Transaction PIN is your secret 4-digits PIN used to authorise all your transactions on the Frenn system. Please do not share your transaction PIN with anyone.',
          isLink: false,
        },
      ],
    },
    {
      id: 2,
      ques: 'Can I change my transaction PIN?',
      ans: [
        {
          text: 'Yes. To change your transaction PIN, login to your Frenn account and go to your profile section to change your PIN.',
          isLink: false,
        },
      ],
    },
    {
      id: 3,
      ques: 'What is Frenn Passcode?',
      ans: [
        {
          text: 'Frenn passcode is your 6-digits login code. Do not share your login passcode with anyone.',
          isLink: false,
        },
      ],
    },
  ];

  data_7: any = [
    {
      id: 0,
      ques: 'Can I share my personal details with anyone?',
      ans: [
        {
          text: `No. Please make sure to protect your login passcode and transaction PIN. Do not share it with anyone.`,
          isLink: false,
        },
        {
          text: `Frenn will never call you to request for your login passcode and transaction PIN information.`,
          isLink: false,
        },
      ],
    },
    {
      id: 1,
      ques: 'Can I trust Frenn with my personal data?',
      ans: [
        {
          text: 'Yes, we make sure all your data is encrypted and will never share your data without your consent.',
          isLink: false,
        },
        {
          text: 'Please refer to our privacy policy for more details.',
          isLink: true,
        },
      ],
    },
  ];

  toggleAccordion(event: any, index: number, data: any) {
    var element = event.target;
    element.classList.toggle('active');
    if (data[index].isActive) {
      data[index].isActive = false;
    } else {
      data[index].isActive = true;
    }
    var panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }
}
