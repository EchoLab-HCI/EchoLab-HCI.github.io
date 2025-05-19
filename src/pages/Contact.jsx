import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log("Form submitted:", formData);
    alert("感谢您的留言！我们会尽快回复。");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="contact">
      <h1>联系我们</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>联系方式</h2>
          <p>📧 Email: contact@echolab-hci.com</p>
          <p>📱 电话: +86 XXX XXXX XXXX</p>
          <p>📍 地址: 中国北京市海淀区</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>发送消息</h2>
          <div className="form-group">
            <label htmlFor="name">姓名</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">邮箱</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">留言</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            发送
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
