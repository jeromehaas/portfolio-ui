// IMPORTS
import Section from "@/components/layouts/section/section";
import ContactIntroduction from "@/components/cards/contact-introduction/contact-introduction";
import ContactForm from "@/components/cards/contact-form/contact-form";
import ContactMap from "@/components/cards/contact-map/contact-map";
import ContactAddress from "@/components/cards/contact-address/contact-address";
import ContactSocialGithub from "@/components/cards/contact-social-github/conatct-social-github";
import ContactSocialInstagram from "@/components/cards/contact-social-instagram/contact-social-instagram";
import ContactSocialLinkedin from "@/components/cards/contact-social-linkedin/contact-social-linkedin";
import ContactSocialPhone from "@/components/cards/contact-social-phone/contact-social-phone";
import ContactSocialEmail from "@/components/cards/contact-social-email/contact-social-email";

// CONTACT
const Contact = () => {

	// RENDER
  return (
		<Section>
			<ContactIntroduction />
			<ContactForm />
			<ContactMap />
			<ContactAddress />
			<ContactSocialGithub />
			<ContactSocialInstagram />
			<ContactSocialLinkedin />
			<ContactSocialPhone />
			<ContactSocialEmail />
		</Section>
  );

};

// EXPORTS
export default Contact;