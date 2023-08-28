import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users/Users";
import MyPage from "./components/Users/MyPage";
import LoginForm from "./components/Auth/LoginForm";
import UserForm from "./components/Auth/UserForm";
import UserPage from "./components/Users/UserPage";
import Message from "./components/Messages/Message";
import MessageReply from "./components/Messages/MessageReply";
import MessageForm from "./components/Messages/MessageForm";
import MessageReplyForm from "./components/Messages/MessageReplyForm";
import UpdateUserForm from "./components/Users/UpdateUserForm";
import Review from "./components/Reviews/Review";
import ReviewReply from "./components/Reviews/ReviewReply";
import ReviewForm from "./components/Reviews/ReviewForm";
import ReviewReplyForm from "./components/Reviews/ReviewReplyForm";
import UpdateReviewForm from "./components/Reviews/UpdateReviewForm";
import UpdateReviewReplyForm from "./components/Reviews/UpdateReviewReplyForm";
import UserPhotos from "./components/Media/UserPhotos";
import UserVideos from "./components/Media/UserVideos";
import PhotoView from "./components/Media/PhotoView";
import VideoView from "./components/Media/VideoView";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/my-page" element={<MyPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<UserForm />} />
      <Route path="/users/:username" element={<UserPage />} />
      <Route path="/users/:username/update" element={<UpdateUserForm />} />
      <Route path="/users/:username/photos" element={<UserPhotos />} />
      <Route path="/users/:username/videos" element={<UserVideos />} />
      <Route path="/messages/:id" element={<Message />} />
      <Route path="/messages/replies/:id" element={<MessageReply />} />
      <Route path="/messages/create-message" element={<MessageForm />} />
      <Route path="/messages/:id/reply" element={<MessageReplyForm />} />
      <Route path="/ski-areas/:slug/review" element={<ReviewForm />} />
      <Route path="/ski-areas/reviews/:id" element={<Review />} />
      <Route
        path="/ski-areas/reviews/:id/update"
        element={<UpdateReviewForm />}
      />
      <Route
        path="/ski-areas/reviews/:id/reply"
        element={<ReviewReplyForm />}
      />
      <Route path="/ski-areas/reviews/replies/:id" element={<ReviewReply />} />
      <Route
        path="/ski-areas/reviews/replies/:id/update"
        element={<UpdateReviewReplyForm />}
      />
    </Routes>
  );
};

export default AppRoutes;
