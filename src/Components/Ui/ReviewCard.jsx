import React from "react";

const ReviewCard = ({ review }) => {
  const { userName, user_photoURL, review: reviewText, date } = review;

  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm max-w-sm">
      {/* Quote mark */}
      <div className="text-4xl text-gray-300 font-serif leading-none mb-2">
        "
      </div>

      {/* Review Text */}
      <p className="text-sm text-gray-500 leading-relaxed mb-5">{reviewText}</p>

      {/* Dashed Divider */}
      <div className="border-t border-dashed border-gray-200 mb-5" />

      {/* User Info */}
      <div className="flex items-center gap-3">
        {user_photoURL ? (
          <img
            src={user_photoURL}
            alt={userName}
            className="w-11 h-11 rounded-full object-cover"
          />
        ) : (
          <div className="w-11 h-11 rounded-full bg-[#1a2f2a] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-medium">{initials}</span>
          </div>
        )}
        <div>
          <p className="text-base font-semibold text-gray-800 leading-tight">
            {userName}
          </p>
          <p className="text-sm text-gray-400">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
