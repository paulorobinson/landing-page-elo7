import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Link from '../Link';
import Title from '../Title';

import styles from './styles.module.scss';

interface JobAPIProps {
  ativa: boolean;
  cargo: string;
  link: string;
  localizacao: LocationProps;
}

interface LocationProps {
  bairro: string;
  cidade: string;
  pais: string;
}

interface JobProps {
  ativa: boolean;
  cargo: string;
  link: string;
  localizacao: string;
}

const JobsFooter = () => {
  const [jobs, setJobs] = useState<JobProps[]>([]);

  useEffect(() => {
    api
      .get('/')
      .then(({ data }) => {
        const filteredActiveJobs = data.vagas.filter(
          (job: JobAPIProps) => job.ativa === true
        );

        const setLocation = filteredActiveJobs.map((job: JobAPIProps) => {
          const existLocation = !job.localizacao
            ? 'Remoto'
            : `${job.localizacao?.bairro} - ${job.localizacao?.cidade}, ${job.localizacao?.pais}`;

          return { ...job, localizacao: existLocation };
        });
        setJobs(setLocation);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={styles.container}>
      <Title>Vagas em Aberto</Title>
      <Title isCenter={false}>Desenvolvimento</Title>
      <ul>
        {jobs.map((job, index) => (
          <li key={index} className={styles.jobsList}>
            <Link href={job.link} isCenter={false}>
              {job.cargo}
            </Link>
            <h3>{job.localizacao}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default JobsFooter;
