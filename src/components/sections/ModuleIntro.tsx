import React from "react";
import { Kicker } from "@/components/ui/Kicker";
import { Tag } from "@/components/ui/Tag";

export function ModuleIntro() {
  return (
    <section className="section" id="modul" data-od-id="module-intro">
      <div className="container-app">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-7 md:gap-16 items-end">
          <div>
            <Kicker>Lima modul</Kicker>
            <h2 className="text-fg">
              Satu sumber kebenaran untuk lima pertanyaan SDM yang paling sering ditunda.
            </h2>
          </div>
          <div>
            <p className="lead">
              Setiap modul memakai data kehadiran yang sama, jadi angka absensi, lembur, dan biaya tidak pernah bercerita beda di rapat yang berbeda.
            </p>
            <div className="flex flex-wrap gap-2 mt-5.5">
              <Tag>Absensi</Tag>
              <Tag>Gaji</Tag>
              <Tag>Exam</Tag>
              <Tag>Perizinan</Tag>
              <Tag>Library</Tag>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
