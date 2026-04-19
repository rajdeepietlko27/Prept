import { getInterviewers } from "@/actions/explore";
import PageHeader from "@/components/ui/reusable";
import React from "react";
import ExploreGrid from "./_components/exploregrid";

const ExplorePage = async () => {
  const interviewers = await getInterviewers();
  return <main className="min-h-screen bg-black">
      <PageHeader 
        label="Explore"
        gray="Find your"
        gold="expert Interviewer"
        description="Browse senior Engineers from top companies."
      />
       {/* Content */}
      <div className="max-w-6xl mx-auto px-8 xl:px-0 py-10">
        <ExploreGrid interviewers={interviewers} />
      </div>
     </main>;
};

export default ExplorePage;
