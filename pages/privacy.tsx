import Head from 'next/head';
import Image from 'next/image';
import { Open_Sans, Lato } from '@next/font/google';
import Link from 'next/link';

const open_sans = Open_Sans({subsets: ['latin'], variable: '--font-open-sans'});
export default function Privacy() {
  return (
    <>
      <Head>
        <title>Shoutouts App</title>
        <meta name="description" content="Send a shoutout to your friends, coworkers, and community. Build strong communities and positive workplace culture by spreading gratitude." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${open_sans.variable} font-sans flex flex-col justify-evenly items-center`}>
        <div className={`flex-1 bg-zinc-900 flex flex-grow text-white flex-col w-full pb-10`}>
            <h1 className={`text-center text-4xl p-5`}>Privacy Policy</h1>
            <div className={`flex flex-col ml-72 mr-72 text-left`}>
                <p className={``}>At Shoutouts, we value user privacy and security. We disclose all user information and data that we collect
                    as well as the methods of usage and distribution of user data. In addition, we use several data protection methods and protocols to comply with 
                    data protection laws such as the GDPR and CCPA. </p>
                <h2 className={`text-lg font-bold pt-5 pb-2`}>What Data Do We Collect?</h2>
                <p>Shoutouts collects various types of user data in order to provide users access to our services. The user data we collect includes
                    Personal Data, or data that can be used to identify a natural person, whether directly and indirectly. For example, your email address, IP addresses, 
                    and device identifiers are all examples of Personal Data.
                </p>
                <h2 className={`text-lg font-bold pt-5 pb-2`}>Personal Data Usage</h2>
                <table>
                    <tr className={`text-lg text-center`}>
                        <td className={`border p-4`}>
                            Purpose for collecting your data
                        </td>
                        <td className={`border p-4`}>
                            Types of data collected for this purpose
                        </td>
                        <td className={`border p-4`}>
                            Legal basis permitting this purpose
                        </td>
                    </tr>
                    <tr>
                        <td className={`border p-5`}>
                            <p className={`p-2`}>
                                To create and authentication user accounts on the Shoutouts application
                            </p>
                        </td>
                        <td className={`border p-5`}>
                            <p className={`p-2`}>
                                Email Address, Full Name, Google Account User ID, Device and Account Identifiers 
                            </p>
                        </td>
                        <td className={`border p-5`}>
                            <p className={`p-2`}>
                                Consent, Legitimate Interest
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td className={`border p-5`}>
                            <p className={`p-2`}>
                                To provide personalized content and features to users
                            </p>
                        </td>
                        <td className={`border p-5`}>
                            <p className={`p-2`}>
                                Contacts (Obtained from Apple device), 
                            </p>
                        </td>
                        <td className={`border p-5`}>
                            <p className={`p-2`}>
                                Consent, Legitimate Interest
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td className={`border p-5`}>
                            <p className={`p-2`}>
                                To analyze app usage in order to develop new features and improvements to the Shoutouts application
                            </p>
                        </td>
                        <td className={`border p-5`}>
                            <p className={`p-2`}>
                                Usage Data (eg. How many shoutouts you received on February 14)
                            </p>
                        </td>
                        <td className={`border p-5`}>
                            <p className={`p-2`}>
                                Legitimate Interest
                            </p>
                        </td>
                    </tr>
                </table>
                <h2 className={`text-lg font-bold pt-5 pb-2`}>Policy Regarding the Personal Data of Children</h2>
                <p>
                    Our app is not intended for use by children under the age of 13. If you find that we have collected the Personal Data of a child,
                    please contact us through email with the details of the user account in question.
                </p>
                <h2 className={`text-lg font-bold pt-5 pb-2`}>Personal Data Security</h2>
                <p>
                    We implement technical and organizational data protection techniques to ensure that your Personal Data is used only for the purpose for which 
                    they were collected. Any exchange or transfer of information over the Internet, however, carries some degree of danger. Therefore, any Personal
                    Data you provide is done so at your own risk.
                </p>
                <h2 className={`text-lg font-bold pt-5 pb-2`}>Third Party Access to Personal Data</h2>
                <p>
                    We only share information with GDPR-compliant third parties to generate usage statistics and analytics.
                </p>
                <h2 className={`text-lg font-bold pt-5 pb-2`}>Cookies</h2>
                <p>
                    Our application does not use cookies.
                </p>
                <h2 className={`text-lg font-bold pt-5 pb-2`}>How to Access and Delete Your Personal Data</h2>
                <p>
                    We believe that users have the right to access, modify, and/or remove the data that they provide. To request access or deletion of your 
                    Personal Data, contact us by email.
                </p>
                <h2 className={`text-lg font-bold pt-5 pb-2`}>Communication</h2>
                <p>
                    You can exercise these rights anytime by contacting us through email.
                </p>
            </div>
        </div>

        <div className={`flex justify-start items-center flex-row`}>
          <div className={`flex flex-row justify-start items-center text-gray-600 p-5`}>
          <h1 className={`p-3`}>Help</h1>
            <h1 className={`p-3`}>Contact Us</h1>
            <h1 className={`p-3`}>Terms</h1>
            <Link href="/privacy">
                <h1 className={`p-3`}>Privacy Policy</h1>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
