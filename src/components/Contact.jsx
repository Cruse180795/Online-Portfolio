// React useForm Import
import { useForm } from "react-hook-form";

// React Hook Imports
import { useState, useEffect } from "react";

// Email.js Import
import emailjs from "@emailjs/browser";

// Custom Component Imports
import SectionHeader from "./ui/SectionHeader";
import SectionSubTitle from "./ui/SectionSubTitle";
import SectionTitle from "./ui/SectionTitle";

// React Icons Import
import { FaCheckCircle } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

function Contact({ projectid }) {
  const [messageSent, setMessageSent] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      senders_name: "",
      senders_subject: "",
      senders_message: "",
      senders_email: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      await emailjs.send(serviceId, templateId, data, { publicKey });
      setMessageSent(true);
      setSendError(false);
    } catch (error) {
      console.error(error);
      setMessageSent(false);
      setSendError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!messageSent) return;

    const timer = setTimeout(() => {
      setMessageSent(false);
      reset();
    }, 5000);

    return () => clearTimeout(timer);
  }, [messageSent, reset]);

  useEffect(() => {
    if (!sendError) return;

    const timer = setTimeout(() => {
      setSendError(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [sendError]);

  return (
    <section className="text-jet bg-chalk py-10 space-y-10 px-4" id={projectid}>
      <SectionHeader>
        <SectionTitle title="Contact the developer" />
        <SectionSubTitle subtitle="Have an idea or project? Let’s build something great." />
      </SectionHeader>

      {/* Display Successfully Email Sent */}
      {messageSent && (
        <div className="p-2 border-[1.5px] border-emerald-500 text-emerald-500 rounded-lg shadow-lg flex items-center justify-center gap-x-1.5">
          <p className="font-roboto-mono tracking-wide font-light capitalize">
            Message sent successfully
          </p>
          <span>
            <FaCheckCircle />
          </span>
        </div>
      )}

      {/* Display Error Message In Case Email Can't Be Sent */}
      {sendError && (
        <div className="p-2 border-[1.5px] border-red-500 text-red-500 rounded-lg shadow-lg flex items-center justify-center gap-x-1.5">
          <p className="font-roboto-mono tracking-wide font-light capitalize">
            Failed to send message
          </p>
          <span>
            <FaExclamationCircle />
          </span>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* NAME */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="senders_name"
              className="block text-sm font-roboto-mono tracking-wide font-light"
            >
              Name
            </label>
            {errors.senders_name && (
              <p className="text-xs font-roboto-mono tracking-wide font-light capitalize text-red-500">
                {errors.senders_name.message}
              </p>
            )}
          </div>

          <input
            id="senders_name"
            type="text"
            className={`w-full px-4 py-2 border-[1.5px] rounded-lg shadow-lg outline-none ${
              errors.senders_name ? "border-red-500" : ""
            }`}
            {...register("senders_name", {
              required: "Name is required",
              maxLength: {
                value: 20,
                message: "Max length is 20 characters",
              },
            })}
          />
        </div>

        {/* SUBJECT */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="senders_subject"
              className="block text-sm font-roboto-mono tracking-wide font-light"
            >
              Subject
            </label>
            {errors.senders_subject && (
              <p className="text-xs font-roboto-mono tracking-wide font-light capitalize text-red-500">
                {errors.senders_subject.message}
              </p>
            )}
          </div>

          <input
            id="senders_subject"
            type="text"
            className={`w-full px-4 py-2 border-[1.5px] rounded-lg shadow-lg outline-none ${
              errors.senders_subject ? "border-red-500" : ""
            }`}
            {...register("senders_subject", {
              required: "Subject is required",
              maxLength: {
                value: 25,
                message: "Max length is 25 characters",
              },
            })}
          />
        </div>

        {/* EMAIL */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="senders_email"
              className="block text-sm font-roboto-mono tracking-wide font-light"
            >
              Email Address
            </label>
            {errors.senders_email && (
              <p className="text-xs font-roboto-mono tracking-wide font-light capitalize text-red-500">
                {errors.senders_email.message}
              </p>
            )}
          </div>

          <input
            id="senders_email"
            type="email"
            className={`w-full px-4 py-2 border-[1.5px] rounded-lg shadow-lg outline-none ${
              errors.senders_email ? "border-red-500" : ""
            }`}
            {...register("senders_email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email needs to be valid",
              },
            })}
          />
        </div>

        {/* MESSAGE */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="senders_message"
              className="block text-sm font-roboto-mono tracking-wide font-light"
            >
              Message
            </label>
            {errors.senders_message && (
              <p className="text-xs font-roboto-mono tracking-wide font-light capitalize text-red-500">
                {errors.senders_message.message}
              </p>
            )}
          </div>

          <textarea
            id="senders_message"
            cols={6}
            rows={6}
            className={`w-full px-4 py-2 border-[1.5px] rounded-lg shadow-lg outline-none ${
              errors.senders_message ? "border-red-500" : ""
            }`}
            {...register("senders_message", {
              required: "Message is required",
              maxLength: {
                value: 250,
                message: "Max length is 250 characters.",
              },
            })}
          ></textarea>
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="px-4 py-2 rounded-lg shadow-lg w-full text-chalk font-roboto-mono font-semibold tracking-wide bg-linear-to-br from-primary-300 to-primary-500"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
