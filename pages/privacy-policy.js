import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      {/* Privacy Policy Introduction */}
      <section className="desktop:px-96 tablet:pt-28 laptop:px-28 tablet:px-16 px-5 desktop:pt-16 pt-28">
        <div className="laptop:container container-fluid mx-auto">
          <div className="flex gap-x-5">
            <p className="laptop:text-base text-sm font-normal rounded-100 bg-warm-cream-50 tablet:py-1 tablet:px-4 px-4 py-1 text-center">
              v1.0.0
            </p>
            <p className="laptop:text-base text-sm font-normal pt-2">
              Published on October 12, 2022
            </p>
          </div>
          <h1 className="laptop:text-6xl text-3xl font-bold pt-5">
            Privacy Policy
          </h1>
          <p className="laptop:text-base text-sm pt-2 font-normal">
            This Privacy Policy describes our policies and procedures on the
            collection, use and disclosure of your information when you use the
            Service and tells us about your privacy rights and how the law
            protects you.
          </p>
          <p className="laptop:pt-2 laptop:pb-2 laptop:text-base text-sm font-normal">
            We use your Personal data to provide and improve the Service. By
            using the Service, you agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>
        </div>
      </section>
      {/* Privacy Policy Content */}
      <section className="desktop:px-96 tablet:pt-5 laptop:px-28 laptop:pb-96 tablet:px-16 tablet:pb-36 pt-2 px-8 pb-20">
        <div className="laptop:container container-fluid mx-auto break-words">
          <div>
            <h2 className="pb-2 tablet:text-3xl text-lg font-bold">
              Interpretation and Definitions
            </h2>

            {/* Interpretation */}
            <div className="pt-5">
              <h3 className="tablet:text-2xl text-base font-bold pb-2">
                Interpretation
              </h3>
              <p className="laptop:text-base text-sm font-normal pb-2">
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>
            </div>

            {/* Definitions */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg pb-2 font-bold">
                Definitions
              </h2>
              <p className="text-base font-normal pb-2">
                For the purposes of this Privacy Policy:
              </p>
              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li>
                  Account means a unique account created for you to access our
                  Service or parts of our Service.
                </li>
                <li>
                  Affiliate means an entity that controls, is controlled by or
                  is under common control with a party, where “control” means
                  ownership of 50% or more of the shares, equity interest or
                  other securities entitled to vote for election of directors or
                  other managing authority.
                </li>
                <li>
                  Application means the software program provided by the Company
                  downloaded by you on any electronic device, named SWIRL – Sell
                  more with live video shopping
                </li>
                <li>
                  Business, for the purpose of the CCPA (California Consumer
                  Privacy Act), refers to the Company as the legal entity that
                  collects Consumers’ personal information and determines the
                  purposes and means of the processing of Consumers’ personal
                  information, or on behalf of which such information is
                  collected and that alone, or jointly with others, determines
                  the purposes and means of the processing of consumers’
                  personal information, that does business in the State of
                  California.
                </li>
                <li>
                  Company (referred to as either “the Company”, “We”, “Us” or
                  “Our” in this Agreement) refers to GETNATTY DESIGNTECH PVT.
                  LTD, 6 Lalbaug society, Manjalpur, Vadodara 390011, Gujarat,
                  India.
                </li>
              </ul>
              <p className="laptop:text-base text-sm font-normal  py-2">
                For the purpose of the GDPR, the Company is the Data Controller.
              </p>
              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li>
                  Consumer, for the purpose of the CCPA (California Consumer
                  Privacy Act), means a natural person who is a California
                  resident. A resident, as defined in the law, includes (1)
                  every individual who is in the USA for other than a temporary
                  or transitory purpose, and (2) every individual who is
                  domiciled in the USA who is outside the USA for a temporary or
                  transitory purpose.
                </li>
                <li>Country refers to: Gujrat, India</li>
                <li>
                  Data Controller, for the purposes of the GDPR (General Data
                  Protection Regulation), refers to the Company as the legal
                  person which alone or jointly with others determines the
                  purposes and means of the processing of Personal Data.
                </li>
                <li>
                  Device means any device that can access the Service such as a
                  computer, a cellphone or a digital laptop.
                </li>
                <li>
                  Do Not Track (DNT) is a concept that has been promoted by US
                  regulatory authorities, in particular the U.S. Federal Trade
                  Commission (FTC), for the Internet industry to develop and
                  implement a mechanism for allowing internet users to control
                  the tracking of their online activities across websites.
                </li>
                <li>
                  Personal Data is any information that relates to an identified
                  or identifiable individual.
                </li>
              </ul>
              <p className="laptop:text-base text-sm font-normal pt-2">
                For the purposes for GDPR, Personal Data means any information
                relating to you such as a name, an identification number,
                location data, online identifier or to one or more factors
                specific to the physical, physiological, genetic, mental,
                economic, cultural or social identity.
              </p>
              <p className="laptop:text-base text-sm font-normal py-2">
                For the purposes of the CCPA, Personal Data means any
                information that identifies, relates to, describes or is capable
                of being associated with, or could reasonably be linked,
                directly or indirectly, with you.
              </p>
              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li>
                  Sale, for the purpose of the CCPA (California Consumer Privacy
                  Act), means selling, renting, releasing, disclosing,
                  disseminating, making available, transferring, or otherwise
                  communicating orally, in writing, or by electronic or other
                  means, a Consumer’s personal information to another business
                  or a third party for monetary or other valuable consideration.
                </li>
                <li>Service refers to the Application</li>
                <li>
                  Service Provider means any natural or legal person who
                  processes the data on behalf of the Company. It refers to
                  third-party companies or individuals employed by the Company
                  to facilitate the Service, to provide the Service on behalf of
                  the Company, to perform services related to the Service or to
                  assist the Company in analysing how the Service is used. For
                  the purpose of the GDPR, Service Providers are considered Data
                  Processors.
                </li>
                <li>
                  Usage Data refers to data collected automatically, either
                  generated by the use of the Service or from the Service
                  infrastructure itself (for example, the duration of a page
                  visit).
                </li>
                <li>
                  You means the individual accessing or using the Service, or
                  the company, or other legal entity on behalf of which such
                  individual is accessing or using the Service, as applicable.
                </li>
              </ul>
              <p className="laptop:text-base text-sm font-normal py-2">
                Under GDPR (General Data Protection Regulation), You can be
                referred to as the Data Subject or as the User as you are the
                individual using the Service.
              </p>
            </div>

            {/* Collecting and Using Your Personal Data */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold pt-2">
                Collecting and Using Your Personal Data
              </h2>
              <h3 className="tablet:text-2xl text-base font-bold pt-2">
                Personal Data
              </h3>
              <p className="laptop:text-base text-sm font-normal py-2">
                While using our Service, we may ask you to provide us with
                certain personally identifiable information that can be used to
                contact or identify you. Personally identifiable information may
                include, but is not limited to:
              </p>
              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li>Email address</li>
                <li>First name</li>
                <li>Phone number</li>
                <li>Usage Data</li>
              </ul>
              <h3 className="tablet:text-2xl text-base font-bold pt-2">Usage Data</h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Usage Data is collected automatically when using the Service.
                Usage Data may include information such as your Device’s
                Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that you visit, the
                time and date of your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data.
              </p>
              <p className="laptop:text-base text-sm font-normal pt-2">
                When you access the Service by or through a tablet device, we
                may collect certain information automatically, including, but
                not limited to, the type of tablet device you use, your tablet
                device unique ID, the IP address of your tablet device, your
                tablet operating system, the type of tablet Internet browser you
                use, unique device identifiers and other diagnostic data.
              </p>
              <p className="laptop:text-base text-sm font-normal pt-2">
                We may also collect information that your browser sends whenever
                you visit our Service or when you access the Service by or
                through a tablet device.
              </p>

              <p className="laptop:text-base text-sm font-normal pt-2">
                Information Collected while Using the Application
              </p>

              <p className="laptop:text-base text-sm font-normal py-2">
                While using our application, in order to provide features of our
                application, we may collect, with your prior permission:
              </p>

              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li>
                  Information from your Device’s phone book (contacts list)
                </li>
                <li>
                  Information from your Device’s phone book (contacts list)
                </li>
              </ul>

              <p className="laptop:text-base text-sm font-normal pt-2">
                We use this information to provide features of our Service, to
                improve and customize our Service. The information may be
                uploaded to the Company’s servers and/or a Service Provider’s
                server or it may be simply stored on your device.
              </p>

              <p className="laptop:text-base text-sm font-normal py-2">
                You can enable or disable access to this information at any
                time, through your Device settings.
              </p>
            </div>

            {/* Use of Your Personal Data */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold">
                Use of Your Personal Data
              </h2>
              <p className="laptop:text-base text-sm font-normal py-2">
                The Company may use Personal Data for the following purposes:
              </p>
              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li>
                  To provide and maintain our Service, including to monitor the
                  usage of our Service.
                </li>
                <li>
                  To manage Your Account: to manage your registration as a user
                  of the Service. The Personal Data you provide can give you
                  access to different functionalities of the Service that are
                  available to you as a registered user.
                </li>
                <li>
                  For the performance of a contract: the development, compliance
                  and undertaking of the purchase contract for the products,
                  items or services you have purchased or of any other contract
                  with us through the Service.
                </li>
                <li>
                  To contact You: To contact you by email, telephone calls, SMS,
                  or other equivalent forms of electronic communication, such as
                  a tablet application’s push notifications regarding updates or
                  informative communications related to the functionalities,
                  products or contracted services, including the security
                  updates, when necessary or reasonable for their
                  implementation.
                </li>
                <li>
                  To provide You with news, special offers and general
                  information about other goods, services and events which we
                  offer that are similar to those that you have already
                  purchased or enquired about unless you have opted not to
                  receive such information.
                </li>
                <li>
                  To manage Your requests: To attend and manage your requests to
                  us.
                </li>
                <li>
                  For business transfers: We may use your information to
                  evaluate or conduct a merger, divestiture, restructuring,
                  reorganization, dissolution, or other sale or transfer of some
                  or all of our assets, whether as a going concern or as part of
                  bankruptcy, liquidation, or similar proceeding, in which
                  Personal Data held by us about our Service users is among the
                  assets transferred.
                </li>
                <li>
                  For other purposes: We may use your information for other
                  purposes, such as data analysis, identifying usage trends,
                  determining the effectiveness of our promotional campaigns and
                  to evaluate and improve our Service, products, services,
                  marketing and your experience.
                </li>
              </ul>
              <p className="laptop:text-base text-sm font-normal py-2">
                We may share your personal information in the following
                situations:
              </p>
              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li>
                  With Service Providers: We may share your personal information
                  with Service Providers to monitor and analyse the use of our
                  Service, to contact you.
                </li>
                <li>
                  For business transfers: We may share or transfer your personal
                  information in connection with, or during negotiations of, any
                  merger, sale of Company assets, financing, or acquisition of
                  all or a portion of our business to another company.
                </li>
                <li>
                  With Affiliates: We may share your information with our
                  affiliates, in which case we will require those affiliates to
                  honour this Privacy Policy. Affiliates include our parent
                  company and any other subsidiaries, joint venture partners or
                  other companies that we control or that are under common
                  control with us.
                </li>
                <li>
                  With business partners: We may share your information with Our
                  business partners to offer you certain products, services or
                  promotions.
                </li>
                <li>
                  With other users: when you share personal information or
                  otherwise interact in the public areas with other users, such
                  information may be viewed by all users and may be publicly
                  distributed outside.
                </li>
                <li>
                  With Your consent: We may disclose your personal information
                  for any other purpose with your consent.
                </li>
              </ul>
            </div>

            {/* Retention of Your Personal Data */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold">
                Retention of Your Personal Data
              </h2>
              <p className="laptop:text-base text-sm font-normal py-2">
                The Company will retain your Personal Data only for as long as
                is necessary for the purposes set out in this Privacy Policy. We
                will retain and use your Personal Data to the extent necessary
                to comply with our legal obligations (for example, if we are
                required to retain your data to comply with applicable laws),
                resolve disputes, and enforce our legal agreements and policies.
                The Company will also retain Usage Data for internal analysis
                purposes. Usage Data is generally retained for a shorter period
                of time, except when this data is used to strengthen the
                security or to improve the functionality of our Service, or We
                are legally obligated to retain this data for longer time
                periods.
              </p>
            </div>

            {/* Transfer of Your Personal Data */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold">
                Transfer of Your Personal Data
              </h2>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Your information, including Personal Data, is processed at the
                Company’s operating offices and in any other places where the
                parties involved in the processing are located. It means that
                this information may be transferred to — and maintained on —
                computers located outside of your state, province, country or
                other governmental jurisdiction where the data protection laws
                may differ than those from your jurisdiction.
              </p>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Your consent to this Privacy Policy followed by your submission
                of such information represents your agreement to that transfer.
              </p>
              <p className="laptop:text-base text-sm font-normal py-2">
                The Company will take all steps reasonably necessary to ensure
                that your data is treated securely and in accordance with this
                Privacy Policy and no transfer of your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of your data and other
                personal information.
              </p>
            </div>

            {/* Disclosure of Your Personal Data */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold ">
                Disclosure of Your Personal Data
              </h2>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Business Transactions
              </p>
              <p className="laptop:text-base text-sm font-normal pt-2">
                If the Company is involved in a merger, acquisition or asset
                sale, your Personal Data may be transferred. We will provide
                notice before your Personal Data is transferred and becomes
                subject to a different Privacy Policy.
              </p>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Law enforcement
              </p>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Under certain circumstances, the Company may be required to
                disclose your Personal Data if required to do so by law or in
                response to valid requests by public authorities (e.g. a court
                or a government agency).
              </p>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Other legal requirements
              </p>
              <p className="laptop:text-base text-sm font-normal py-2">
                The Company may disclose your Personal Data in the good faith
                belief that such action is necessary to:
              </p>
              <ul className="laptop:text-base font-normal list-disc list-outside pl-10 pb-2">
                <li>Comply with a legal obligation</li>
                <li>
                  Protect and defend the rights or property of the Company
                </li>
                <li>
                  Prevent or investigate possible wrongdoing in connection with
                  the Service
                </li>
                <li>
                  Protect the personal safety of Users of the Service or the
                  public
                </li>
                <li>Protect against legal liability</li>
              </ul>
            </div>

            {/* Security of Your Personal Data */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold ">
                Security of Your Personal Data
              </h2>
              <p className="laptop:text-base text-sm font-normal py-2">
                The security of your Personal Data is important to us, but
                remember that no method of transmission over the Internet, or
                method of electronic storage is 100% secure. While we strive to
                use commercially acceptable means to protect Your Personal Data,
                we cannot guarantee its absolute security.
              </p>
            </div>

            {/* Detailed Information on the Processing of Your Personal Data */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold">
                Detailed Information on the Processing of Your Personal Data
              </h2>
              <p className="laptop:text-base text-sm font-normal py-2">
                The Service Providers we use may have access to your Personal
                Data. These third-party vendors collect, store, use, process and
                transfer information about your activity on our Service in
                accordance with their Privacy Policies.
              </p>
            </div>

            {/* Analytics */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold ">
                Analytics
              </h2>
              <p className="laptop:text-base text-sm font-normal py-2">
                We may use third-party Service providers to monitor and analyse
                the use of our Service.
              </p>
              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                Google Analytics
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Google Analytics is a web analytics service offered by Google
                that tracks and reports website traffic. Google uses the data
                collected to track and monitor the use of our Service. This data
                is shared with other Google services. Google may use the
                collected data to contextualize and personalize the ads of its
                own advertising network.
              </p>
              <p className="laptop:text-base text-sm font-normal pt-2">
                You may opt-out of certain Google Analytics features through
                your tablet device settings, such as your device advertising
                settings or by following the instructions provided by Google in
                their Privacy Policy:{" "}
                <Link
                  href="https://policies.google.com/privacy"
                  className="underline"
                >
                  https://policies.google.com/privacy
                </Link>
              </p>
              <p className="laptop:text-base text-sm font-normal py-2">
                For more information on the privacy practices of Google, please
                visit the Google Privacy & Terms web page{" "}
                <Link
                  href="https://policies.google.com/privacy"
                  className="underline"
                >
                  https://policies.google.com/privacy
                </Link>
              </p>
              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                Firebase
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Firebase is an analytics service provided by Google Inc. You may
                opt-out of certain Firebase features through your tablet device
                settings, such as your device advertising settings or by
                following the instructions provided by Google in their Privacy
                Policy:{" "}
                <Link
                  href="https://policies.google.com/privacy"
                  className="underline"
                >
                  https://policies.google.com/privacy
                </Link>
              </p>
              <p className="laptop:text-base text-sm font-normal pt-2">
                We also encourage you to review the Google’s policy for
                safeguarding your data{" "}
                <Link
                  href="https://support.google.com/analytics/answer/6004245"
                  className="underline"
                >
                  https://support.google.com/analytics/answer/6004245
                </Link>
              </p>
              <p className="laptop:text-base text-sm font-normal py-2">
                For more information on what type of information Firebase
                collects, please visit the How Google uses data when you use our
                partners’ sites or apps webpage{" "}
                <Link
                  href="https://policies.google.com/technologies/partner-sites"
                  className="underline"
                >
                  https://policies.google.com/technologies/partner-sites
                </Link>
              </p>
            </div>

            {/* Email Marketing */}
            <div className="pt-5">
              <h3 className="tablet:text-2xl text-base font-bold">
                Email Marketing
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                We may use your Personal Data to contact you with newsletters,
                marketing or promotional materials and other information that
                may be of interest to you. You may opt-out of receiving any, or
                all, of these communications from us by following the
                unsubscribe link or instructions provided in any email we send
                or by contacting us.
              </p>
              <p className="laptop:text-base text-sm font-normal py-2">
                We may use Email Marketing Service Providers to manage and send
                emails to you.
              </p>
              <ul className="laptop:text-base font-bold list-disc list-outside pl-10">
                <li>Zoho Campaigns</li>
              </ul>
              <p className="laptop:text-base text-sm font-normal py-2">
                Their Privacy Policy can be viewed at{" "}
                <Link
                  href="https://www.zoho.com/campaigns/"
                  className="underline"
                >
                  https://www.zoho.com/campaigns/
                </Link>
              </p>
              <ul className="laptop:text-base font-bold list-disc list-outside pl-10">
                <li> Elastic Email</li>
              </ul>
              <p className="laptop:text-base text-sm font-normal py-2">
                Their Privacy Policy can be viewed at{" "}
                <Link href="https://elasticemail.com/" className="underline">
                  https://elasticemail.com/
                </Link>
              </p>
            </div>

            {/* GDPR Privacy */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold ">
                GDPR Privacy
              </h2>
              <h3 className="tablet:text-2xl text-base font-bold pt-5 pb-4">
                Legal Basis for Processing Personal Data under GDPR
              </h3>
              <p className="laptop:text-base text-sm font-normal py-2">
                We may process Personal Data under the following conditions:
              </p>

              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li>
                  Consent: You have given Your consent for processing Personal
                  Data for one or more specific purposes.
                </li>
                <li>
                  Performance of a contract: Provision of Personal Data is
                  necessary for the performance of an agreement with You and/or
                  for any pre-contractual obligations thereof.
                </li>
                <li>
                  Legal obligations: Processing Personal Data is necessary for
                  compliance with a legal obligation to which the Company is
                  subject.
                </li>
                <li>
                  Vital interests: Processing Personal Data is necessary in
                  order to protect Your vital interests or of another natural
                  person.
                </li>
                <li>
                  Public interests: Processing Personal Data is related to a
                  task that is carried out in the public interest or in the
                  exercise of official authority vested in the Company.
                </li>
                <li>
                  Legitimate interests: Processing Personal Data is necessary
                  for the purposes of the legitimate interests pursued by the
                  Company.
                </li>
              </ul>
              <p className="laptop:text-base text-sm font-normal py-2">
                In any case, the Company will gladly help to clarify the
                specific legal basis that applies to the processing, and in
                particular whether the provision of Personal Data is a statutory
                or contractual requirement, or a requirement necessary to enter
                into a contract.
              </p>
            </div>

            {/* Your Rights under the GDPR */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold">
                Your Rights under the GDPR
              </h2>
              <p className="laptop:text-base text-sm font-normal pt-2">
                The Company undertakes to respect the confidentiality of your
                Personal Data and to guarantee you can exercise your rights.
              </p>
              <p className="laptop:text-base text-sm font-normal py-2">
                You have the right under this Privacy Policy, and by law if you
                are within the EU, to:
              </p>
              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li className="pt-2">
                  Request access to Your Personal Data. The right to access,
                  update or delete the information we have on you. Whenever made
                  possible, you can access, update or request deletion of your
                  Personal Data directly within your account settings section.
                  If you are unable to perform these actions yourself, please
                  contact us to assist you. This also enables you to receive a
                  copy of the Personal Data we hold about you.
                </li>
                <li className="py-2">
                  Request correction of the Personal Data that We hold about
                  You. You have the right to have any incomplete or inaccurate
                  information we hold about you corrected. .
                </li>
                <li className="py-2">
                  Object to processing of Your Personal Data. This right exists
                  where We are relying on a legitimate interest as the legal
                  basis for Our processing and there is something about Your
                  particular situation, which makes You want to object to our
                  processing of Your Personal Data on this ground. You also have
                  the right to object where We are processing Your Personal Data
                  for direct marketing purposes.
                </li>
                <li className="py-2">
                  Request erasure of Your Personal Data. You have the right to
                  ask Us to delete or remove Personal Data when there is no good
                  reason for Us to continue processing it.
                </li>
                <li className="py-2">
                  Request the transfer of Your Personal Data. We will provide to
                  you, or to a third-party you have chosen, your Personal Data
                  in a structured, commonly used, machine-readable format.
                  Please note that this right only applies to automated
                  information which you initially provided consent for us to use
                  or where we used the information to perform a contract with
                  you.
                </li>
                <li className="py-2">
                  Withdraw Your consent. You have the right to withdraw Your
                  consent on using your Personal Data. If you withdraw your
                  consent, we may not be able to provide you with access to
                  certain specific functionalities of the Service
                </li>
              </ul>
            </div>

            {/* Exercising of Your GDPR Data Protection Right */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold">
                Exercising of Your GDPR Data Protection Rightst
              </h2>
              <p className="laptop:text-base text-sm font-normal pt-2">
                You may exercise your rights of access, rectification,
                cancellation and opposition by contacting us. Please note that
                we may ask you to verify your identity before responding to such
                requests. If you make a request, we will try our best to respond
                to you as soon as possible.
              </p>
              <p className="laptop:text-base text-sm font-normal py-2">
                You have the right to complain to a Data Protection Authority
                about our collection and use of your Personal Data. For more
                information, if you are in the European Economic Area (EEA),
                please contact your local data protection authority in the EEA.
              </p>
            </div>

            {/* CCPA Privacy */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold">
                CCPA Privacy
              </h2>
              <p className="laptop:text-base text-sm font-normal py-2">
                This privacy notice section for California residents supplements
                the information contained in Our Privacy Policy and it applies
                solely to all visitors, users, and others who reside in the
                State of California.
              </p>
            </div>

            {/* Categories of Personal Information Collected */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold">
                Categories of Personal Information Collected
              </h2>
              <p className="laptop:text-base text-sm font-normal pt-2">
                We collect information that identifies, relates to, describes,
                references, is capable of being associated with, or could
                reasonably be linked, directly or indirectly, with a particular
                Consumer or Device. The following is a list of categories of
                personal information which we may collect or may have been
                collected from California residents within the last twelve (12)
                months.
              </p>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Please note that the categories and examples provided in the
                list below are those defined in the CCPA. This does not mean
                that all examples of that category of personal information were
                in fact collected by us, but reflects our good faith belief to
                the best of our knowledge that some of that information from the
                applicable category may be and may have been collected. For
                example, certain categories of personal information would only
                be collected if you provided such personal information directly
                to us.
              </p>
              <h3 className="tablet:text-2xl text-base font-bold pt-4">
                Category A: Identifiers.
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Examples: A real name, alias, postal address, unique personal
                identifier, online identifier, Internet Protocol address, email
                address, account name, driver’s license number, passport number,
                or other similar identifiers. Collected: Yes
              </p>
              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                Category B: Personal information categories listed in the
                California Customer Records statute (Cal. Civ. Code §
                1798.80(e)).
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Examples: A name, signature, Social Security number, physical
                characteristics or description, address, telephone number,
                passport number, driver’s license or state identification card
                number, insurance policy number, education, employment,
                employment history, bank account number, credit card number,
                debit card number, or any other financial information, medical
                information, or health insurance information. Some personal
                information included in this category may overlap with other
                categories. Collected: Yes
              </p>
              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                Category C: Protected classification characteristics under
                California or federal law.
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Examples: Age (40 years or older), race, color, ancestry,
                national origin, citizenship, religion or creed, marital status,
                medical condition, physical or mental disability, sex (including
                gender, gender identity, gender expression, pregnancy or
                childbirth and related medical conditions), sexual orientation,
                veteran or military status, genetic information (including
                familial genetic information). Collected: No
              </p>
              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                Category D: Commercial information.
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Examples: Records and history of products or services purchased
                or considered. Collected: No
              </p>
              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                Category E: Biometric information.
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Examples: Genetic, physiological, behavioural, and biological
                characteristics, or activity patterns used to extract a template
                or other identifier or identifying information, such as,
                fingerprints, faceprints, and voiceprints, iris or retina scans,
                keystroke, gait, or other physical patterns, and sleep, health,
                or exercise data. Collected: No
              </p>
              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                Category F: Internet or other similar network activity.
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Examples: Interaction with our Service or advertisement.
                Collected: Yes
              </p>
              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                Category G: Geolocation data.
              </h3>
              <p className="laptop:text-2xl font-normal pt-2">
                Examples: Approximate physical location. Collected: No
              </p>
              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                Category H: Sensory data.
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Examples: Audio, electronic, visual, thermal, olfactory, or
                similar information. Collected: No
              </p>
              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                Category I: Professional or employment-related information.
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Examples: Current or past job history or performance
                evaluations. Collected: No
              </p>
              <h3 className="tablet:text-2xl text-base pt-5">
                Category J: Non-public education information (per the Family
                Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34
                C.F.R. Part 99)).
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Examples: Education records directly related to a student
                maintained by an educational institution or party acting on its
                behalf, such as grades, transcripts, class lists, student
                schedules, student identification codes, student financial
                information, or student disciplinary records. Collected: No
              </p>
              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                Category K: Inferences drawn from other personal information.
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Examples: Profile reflecting a person’s preferences,
                characteristics, psychological trends, predispositions,
                behaviour, attitudes, intelligence, abilities, and aptitudes.
                Collected: No
              </p>
              <p className="laptop:text-base text-sm font-normal py-2">
                Under CCPA, personal information does not include:
              </p>
              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li> Publicly available information from government records</li>
                <li> Deidentified or aggregated consumer information</li>
                <li>
                  Information excluded from the CCPA’s scope, such as:
                  <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                    <li>
                      Health or medical information covered by the Health
                      Insurance Portability and Accountability Act of 1996
                      (HIPAA) and the California Confidentiality of Medical
                      Information Act (CMIA) or clinical trial data
                    </li>
                    <li>
                      Personal Information covered by certain sector-specific
                      privacy laws, including the Fair Credit Reporting Act
                      (FRCA), the Gramm-Leach-Bliley Act (GLBA) or California
                      Financial Information Privacy Act (FIPA), and the Driver’s
                      Privacy Protection Act of 1994
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Sources of Personal Information */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold">
                Sources of Personal Information
              </h2>
              <p className="laptop:text-base text-sm font-normal py-2">
                We obtain the categories of personal information listed above
                from the following categories of sources:
              </p>
              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li>
                  Directly from You. For example, from the forms you complete on
                  our Service, preferences you express or provide through our
                  Service.
                </li>
                <li>
                  Indirectly from You. For example, from observing your activity
                  on our Service.
                </li>
                <li>
                  Automatically from You. For example, through cookies we or our
                  Service Providers set on your Device as you navigate through
                  our Service.
                </li>
                <li>
                  From Service Providers. For example, third-party vendors to
                  monitor and analyse the use of our Service, or other
                  third-party vendors that we use to provide the Service to you.
                </li>
              </ul>
            </div>

            {/* Use of Personal Information for Business Purposes or Commercial Purposes */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold">
                Use of Personal Information for Business Purposes or Commercial
                Purposes
              </h2>
              <p className="laptop:text-base text-sm font-normal py-2">
                We may use or disclose personal information we collect for
                “business purposes” or “commercial purposes” (as defined under
                the CCPA), which may include the following examples:
              </p>
              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li>
                  To operate our Service and provide you with our Service.
                </li>
                <li>
                  To provide you with support and to respond to your inquiries,
                  including to investigate and address your concerns and monitor
                  and improve our Service.
                </li>
                <li>
                  To fulfil or meet the reason you provided the information. For
                  example, if you share your contact information to ask a
                  question about our Service, we will use that personal
                  information to respond to your inquiry.
                </li>
                <li>
                  To respond to law enforcement requests and as required by
                  applicable law, court order, or governmental regulations.
                </li>
                <li>
                  As described to you when collecting your personal information
                  or as otherwise set forth in the CCPA.
                </li>
                <li>For internal administrative and auditing purposes.</li>
                <li>
                  To detect security incidents and protect against malicious,
                  deceptive, fraudulent or illegal activity, including, when
                  necessary, to prosecute those responsible for such activities.
                </li>
              </ul>

              <p className="laptop:text-base text-sm font-normal pt-2">
                Please note that the examples provided above are illustrative
                and not intended to be exhaustive. For more details on how we
                use this information, please refer to the “Use of Your Personal
                Data” section.
              </p>

              <p className="laptop:text-base text-sm font-normal py-2">
                If we decide to collect additional categories of personal
                information or use the personal information we collected for
                materially different, unrelated, or incompatible purposes we
                will update this Privacy Policy.
              </p>
            </div>

            {/* Disclosure of Personal Information for Business Purposes or Commercial Purposes */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold">
                Disclosure of Personal Information for Business Purposes or
                Commercial Purposes
              </h2>
              <p className="text-base font-normal py-2">
                We may use or disclose and may have used or disclosed in the
                last twelve (12) months the following categories of personal
                information for business or commercial purposes:
              </p>
              <ul className="text-base font-normal list-disc list-outside pl-10">
                <li> Category A: Identifiers </li>
                <li>
                  Category B: Personal information categories listed in the
                  California Customer Records statute (Cal. Civ. Code §
                  1798.80(e))
                </li>
                <li> Category F: Internet or other similar network activity</li>
              </ul>
              <p className="text-base font-normal pt-2">
                Please note that the categories listed above are those defined
                in the CCPA. This does not mean that all examples of that
                category of personal information were in fact disclosed, but
                reflects our good faith belief to the best of our knowledge that
                some of that information from the applicable category may be and
                may have been disclosed.
              </p>

              <p className="laptop:text-base text-sm font-normal py-2">
                When we disclose personal information for a business purpose or
                a commercial purpose, we enter a contract that describes the
                purpose and requires the recipient to both keep that personal
                information confidential and not use it for any purpose except
                performing the contract.
              </p>
            </div>

            {/* Sale of Personal Information */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold">
                Sale of Personal Information
              </h2>
              <p className="laptop:text-base text-sm font-normal py-2">
                As defined in the CCPA, “sell” and “sale” mean selling, renting,
                releasing, disclosing, disseminating, making available,
                transferring, or otherwise communicating orally, in writing, or
                by electronic or other means, a consumer’s personal information
                by the business to a third party for valuable consideration.
                This means that we may have received some kind of benefit in
                return for sharing personal information, but not necessarily a
                monetary benefit.
              </p>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Please note that the categories listed below are those defined
                in the CCPA. This does not mean that all examples of that
                category of personal information were in fact sold, but reflects
                our good faith belief to the best of our knowledge that some of
                that information from the applicable category may be and may
                have been shared for value in return.
              </p>
              <p className="laptop:text-base text-sm font-normal py-2">
                We may sell and may have sold in the last twelve (12) months the
                following categories of personal information:
              </p>
              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li> Category A: Identifiers </li>
                <li>
                  Category B: Personal information categories listed in the
                  California Customer Records statute (Cal. Civ. Code §
                  1798.80(e))
                </li>
                <li> Category F: Internet or other similar network activity</li>
              </ul>
            </div>

            {/*  Share of Personal Information  */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold">
                Share of Personal Information
              </h2>
              <p className="laptop:text-base text-sm font-normal py-2">
                We may share your personal information identified in the above
                categories with the following categories of third parties:
              </p>
              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li> Service Providers </li>
                <li> Our affiliates </li>
                <li> Our business partners </li>
                <li>
                  Third party vendors to whom you or your agents authorize Us to
                  disclose your personal information in connection with products
                  or services we provide to you
                </li>
              </ul>
            </div>

            {/* Sale of Personal Information of Minors Under 16 Years of Age */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold">
                Sale of Personal Information of Minors Under 16 Years of Age
              </h2>
              <p className="laptop:text-base text-sm font-normal pt-2">
                We do not knowingly collect personal information from minors
                under the age of 16 through our Service, although certain
                third-party websites that we link to may do so. These
                third-party websites have their own terms of use and privacy
                policies and we encourage parents and legal guardians to monitor
                their children’s Internet usage and instruct their children to
                never provide information on other websites without their
                permission.
              </p>

              <p className="laptop:text-base text-sm font-normal pt-2">
                We do not sell the personal information of Consumers we actually
                know are less than 16 years of age, unless we receive
                affirmative authorization (the “right to opt-in”) from either
                the Consumer who is between 13 and 16 years of age, or the
                parent or guardian of a Consumer less than 13 years of age.
                Consumers who opt-in to the sale of personal information may
                opt-out of future sales at any time. To exercise the right to
                opt-out, you (or your authorized representative) may submit a
                request to us by contacting us.
              </p>
              <p className="laptop:text-base text-sm font-normal py-2">
                If you have reason to believe that a child under the age of 13
                (or 16) has provided us with personal information, please
                contact us with sufficient detail to enable us to delete that
                information.
              </p>
            </div>

            {/* Your Rights under the CCPA */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold">
                Your Rights under the CCPA
              </h2>
              <p className="laptop:text-base text-sm font-normal py-2">
                The CCPA provides California residents with specific rights
                regarding their personal information. If you are a resident of
                California, you have the following rights:
              </p>
              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li>
                  <strong>The right to notice.</strong> You have the right to be
                  notified which categories of Personal Data are being collected
                  and the purposes for which the Personal Data is being used.
                </li>
                <li>
                  <strong>The right to request.</strong> Under CCPA, you have
                  the right to request that We disclose information to you about
                  our collection, use, sale, disclosure for business purposes
                  and share of personal information. Once we receive and confirm
                  your request, we will disclose to you:
                </li>
                <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                  <li>
                    The categories of personal information we collected about
                    you
                  </li>
                  <li>
                    The categories of sources for the personal information we
                    collected about you
                  </li>
                  <li>
                    Our business or commercial purpose for collecting or selling
                    that personal information
                  </li>
                  <li>
                    The categories of third parties with whom we share that
                    personal information
                  </li>
                  <li>
                    The specific pieces of personal information we collected
                    about you
                  </li>
                  <li>
                    If we sold your personal information or disclosed your
                    personal information for a business purpose, we will
                    disclose to you:
                  </li>
                  <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                    <li>
                      The categories of personal information categories sold
                    </li>
                    <li>
                      The categories of personal information categories
                      disclosed
                    </li>
                  </ul>
                </ul>
              </ul>

              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li>
                  <strong>
                    The right to say no to the sale of Personal Data (opt-out).
                  </strong>
                  You have the right to direct us to not sell your personal
                  information. To submit an opt-out request please contact us.
                </li>
                <li className="pt-2">
                  <strong>The right to delete Personal Data.</strong> You have
                  the right to request the deletion of your Personal Data,
                  subject to certain exceptions. Once we receive and confirm
                  your request, we will delete (and direct our Service Providers
                  to delete) your personal information from our records, unless
                  an exception applies. We may deny your deletion request if
                  retaining the information is necessary for us or our Service
                  Providers to:
                </li>
                <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                  <li>
                    Complete the transaction for which we collected the personal
                    information, provide a good or service that you requested,
                    take actions reasonably anticipated within the context of
                    our ongoing business relationship with you, or otherwise
                    perform our contract with you.
                  </li>
                  <li>
                    Detect security incidents, protect against malicious,
                    deceptive, fraudulent, or illegal activity, or prosecute
                    those responsible for such activities.
                  </li>
                  <li>
                    Debug products to identify and repair errors that impair
                    existing intended functionality.
                  </li>
                  <li>
                    Exercise free speech, ensure the right of another consumer
                    to exercise their free speech rights, or exercise another
                    right provided for by law.
                  </li>
                  <li>
                    Comply with the California Electronic Communications Privacy
                    Act (Cal. Penal Code § 1546 et. seq.).
                  </li>
                  <li>
                    Engage in public or peer-reviewed scientific, historical, or
                    statistical research in the public interest that adheres to
                    all other applicable ethics and privacy laws, when the
                    information’s deletion may likely render impossible or
                    seriously impair the research’s achievement, if you
                    previously provided informed consent.
                  </li>
                  <li>
                    Enable solely internal uses that are reasonably aligned with
                    consumer expectations based on your relationship with us.
                  </li>
                  <li>Comply with a legal obligation.</li>
                  <li>
                    Make other internal and lawful uses of that information that
                    are compatible with the context in which you provided it.
                  </li>
                </ul>
              </ul>

              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li>
                  <strong> The right not to be discriminated against.</strong>
                  You have the right not to be discriminated against for
                  exercising any of your consumer’s rights, including by:
                </li>
                <ul className="laptop:text-base font-normal list-disc list-outside py-2">
                  <li> Denying goods or services to you </li>
                  <li>
                    Charging different prices or rates for goods or services,
                    including the use of discounts or other benefits or imposing
                    penalties
                  </li>
                  <li>
                    Providing a different level or quality of goods or services
                    to you
                  </li>
                  <li>
                    Suggesting that You will receive a different price or rate
                    for goods or services or a different level or quality of
                    goods or services
                  </li>
                </ul>
              </ul>
            </div>

            {/* Exercising Your CCPA Data Protection Rights */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold">
                Exercising Your CCPA Data Protection Rights
              </h2>

              <p className="laptop:text-base text-sm font-normal py-2">
                In order to exercise any of your rights under the CCPA, and if
                you are a California resident, you can contact Us:
              </p>

              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li>By email:</li>
                <li>
                  By visiting this page on our website{" "}
                  <Link
                    href="https://www.goswirl.live/contact/"
                    className="underline"
                  >
                    https://www.goswirl.live/contact/
                  </Link>
                </li>
              </ul>

              <p className="laptop:text-base text-sm font-normal py-2">
                Only you, or a person registered with the California Secretary
                of State that you authorize to act on your behalf, may make a
                verifiable request related to your personal information. Your
                request to us must:
              </p>

              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li>
                  Provide sufficient information that allows us to reasonably
                  verify you are the person about whom we collected personal
                  information or an authorized representative
                </li>
                <li>
                  Describe your request with sufficient detail that allows us to
                  properly understand, evaluate, and respond to it
                </li>
              </ul>

              <p className="laptop:text-base text-sm font-normal py-2">
                We cannot respond to your request or provide you with the
                required information if we cannot:
              </p>

              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li>Verify your identity or authority to make the request</li>
                <li>
                  And confirm that the personal information relates to you
                </li>
              </ul>

              <p className="laptop:text-base text-sm font-normal pt-2">
                We will disclose and deliver the required information free of
                charge within 45 days of receiving your verifiable request. The
                time period to provide the required information may be extended
                once by an additional 45 days when reasonably necessary and with
                prior notice.
              </p>

              <p className="laptop:text-base text-sm font-normal pt-2">
                Any disclosures we provide will only cover the 12-month period
                preceding the verifiable request’s receipt.
              </p>

              <p className="laptop:text-base text-sm font-normal pt-2">
                For data portability requests, We will select a format to
                provide Your personal information that is readily useable and
                should allow You to transmit the information from one entity to
                another entity without hindrance.
              </p>

              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                Do Not Sell My Personal Information
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                You have the right to opt-out of the sale of your personal
                information. Once we receive and confirm a verifiable consumer
                request from you, we will stop selling your personal
                information. To exercise your right to opt-out, please contact
                us.
              </p>

              <p className="laptop:text-base text-sm font-normal pt-2">
                The Service Providers we partner with (for example, our
                analytics or advertising partners) may use technology on the
                Service that sells personal information as defined by the CCPA
                law. If you wish to opt out of the use of your personal
                information for interest-based advertising purposes and these
                potential sales as defined under CCPA law, you may do so by
                following the instructions below.
              </p>

              <p className="laptop:text-base text-sm font-normal pt-2">
                Please note that any opt out is specific to the browser you use.
                You may need to opt out on every browser that you use.
              </p>

              <h3 className="tablet:text-2xl text-base font-bold pt-5"> Website </h3>
              <p className="laptop:text-base text-sm font-normal py-2">
                You can opt out of receiving ads that are personalized as served
                by our Service Providers by following our instructions presented
                on the Service:
              </p>
              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li>
                  The NAI’s opt-out platform{" "}
                  <Link
                    href="http://www.networkadvertising.org/choices/"
                    className="underline"
                  >
                    http://www.networkadvertising.org/choices/
                  </Link>
                </li>
                <li>
                  The EDAA’s opt-out platform{" "}
                  <Link
                    href="http://www.youronlinechoices.com/"
                    className="underline"
                  >
                    http://www.youronlinechoices.com/
                  </Link>
                </li>
                <li>
                  The DAA’s opt-out platform:{" "}
                  <Link
                    href="http://optout.aboutads.info/?c=2&lang=EN"
                    className="underline"
                  >
                    http://optout.aboutads.info/?c=2&lang=EN
                  </Link>
                </li>
              </ul>

              <p className="laptop:text-base text-sm font-normal pt-2">
                The opt out will place a cookie on Your computer that is unique
                to the browser you use to opt out. If you change browsers or
                delete the cookies saved by your browser, you will need to opt
                out again.
              </p>

              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                Mobile Devices
              </h3>
              <p className="laptop:text-base text-sm font-normal py-2">
                Your tablet device may give you the ability to opt out of the
                use of information about the apps you use in order to serve you
                ads that are targeted to your interests:
              </p>

              <ul className="laptop:text-base font-normal list-disc list-outside pl-10">
                <li>
                  “Opt out of Interest-Based Ads” or “Opt out of Ads
                  Personalization” on Android devices
                </li>
                <li>“Limit Ad Tracking” on iOS devices</li>
              </ul>

              <p className="laptop:text-base text-sm font-normal pt-2">
                You can also stop the collection of location information from
                your tablet device by changing the preferences on your tablet
                device.
              </p>

              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                “Do Not Track” Policy as Required by California Online Privacy
                Protection Act (CalOPPA)
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Our Service does not respond to Do Not Track signals.
              </p>

              <p className="laptop:text-base text-sm font-normal pt-2">
                However, some third-party websites do keep track of your
                browsing activities. If you are visiting such websites, you can
                set Your preferences in your web browser to inform websites that
                You do not want to be tracked. You can enable or disable DNT by
                visiting the preferences or settings page of your web browser.
              </p>

              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                Children’s Privacy
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Our Service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                anyone under the age of 13. If you are a parent or guardian and
                you are aware that your child has provided us with Personal
                Data, please contact us. If we become aware that we have
                collected Personal Data from anyone under the age of 13 without
                verification of parental consent, we take steps to remove that
                information from our servers.
              </p>

              <p className="laptop:text-base text-sm font-normal pt-2">
                If we need to rely on consent as a legal basis for processing
                your information and your country requires consent from a
                parent, we may require Your parent’s consent before we collect
                and use that information.
              </p>

              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                Your California Privacy Rights (California’s Shine the Light
                law)
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Under California Civil Code Section 1798 (California’s Shine the
                Light law), California residents with an established business
                relationship with us can request information once a year about
                sharing their Personal Data with third parties for the third
                parties’ direct marketing purposes. If you’d like to request
                more information under the California Shine the Light law, and
                if You are a California resident, you can contact us using the
                contact information provided below.
              </p>

              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                California Privacy Rights for Minor Users (California Business
                and Professions Code Section 22581)
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                California Business and Professions Code section 22581 allow
                California residents under the age of 18 who are registered
                users of online sites, services or applications to request and
                obtain removal of content or information they have publicly
                posted.
              </p>
              <p className="laptop:text-base text-sm font-normal pt-2">
                To request removal of such data, and if you are a California
                resident, you can contact Us using the contact information
                provided below, and include the email address associated with
                your account.
              </p>
              <p className="laptop:text-base text-sm font-normal py-2">
                Be aware that your request does not guarantee complete or
                comprehensive removal of content or information posted online
                and that the law may not permit or require removal in certain
                circumstances.
              </p>

              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                Links to Other Websites
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                Our Service may contain links to other websites that are not
                operated by us. If you click on a third-party link, you will be
                directed to that third party’s site. We strongly advise you to
                review the Privacy Policy of every site you visit.
              </p>
              <p className="laptop:text-base text-sm font-normal pt-2">
                We have no control over and assume no responsibility for the
                content, privacy policies or practices of any third-party sites
                or services.
              </p>

              <h3 className="tablet:text-2xl text-base font-bold pt-5">
                Changes to this Privacy Policy
              </h3>
              <p className="laptop:text-base text-sm font-normal pt-2">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page.
              </p>
              <p className="laptop:text-base text-sm font-normal pt-2">
                We will let you know via email and/or a prominent notice on our
                Service, prior to the change becoming effective and update the
                “Last updated” date at the top of this Privacy Policy.
              </p>
              <p className="laptop:text-base text-sm font-normal py-2">
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>
            </div>

            {/* Contact us */}
            <div className="pt-5">
              <h2 className="tablet:text-3xl text-lg font-bold">Contact us</h2>
              <p className="laptop:text-base text-sm font-normal pt-2">
                If you have any questions about this Privacy Policy, you can
                reach us at: support@goswirl.live
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}